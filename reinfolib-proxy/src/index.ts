import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { ContentfulStatusCode } from 'hono/utils/http-status';
// import { ALLOWED_ORIGINS } from '../config/theConfig';

type Bindings = {
  REINFOLIB_API_KEY: string;
};

const app = new Hono<{ Bindings: Bindings }>();

// CAUTION | 現状はどこからでも受け付ける設定
app.use('/*', cors());

// 許可ドメインを制御する場合は以下を有効化する
// app.use('/*', cors({
//   origin: (origin) => {
//     // 開発中などで origin がない場合（curlなど）や、許可リストに含まれている場合はそのオリジンを返す
//     if (!origin || ALLOWED_ORIGINS.includes(origin)) {
//       return origin;
//     }
//     // リストにない場合は許可しない（nullまたはundefinedを返すとブロックされる）
//     return undefined; 
//   },
// }));

// 都道府県別の市区町村データ取得用エンドポイント
app.post('/api/reinfolib', async (c) => {
  try {
    // APIキーの確認
    if (!c.env.REINFOLIB_API_KEY) {
      return c.json({ error: 'API Key not configured' }, 500);
    }

    // リクエストボディから prefCode を取得
    const { prefCode } = await c.req.json();

    if (!prefCode) {
      return c.json({ error: 'prefCode is required' }, 400);
    }

    const response = await fetch(
      `https://www.reinfolib.mlit.go.jp/ex-api/external/XIT002?area=${prefCode}`,
      {
        headers: {
          "Ocp-Apim-Subscription-Key": c.env.REINFOLIB_API_KEY
        },
      }
    );

    if (!response.ok) {
      // HonoはHTTPステータスコードの事前想定含めて高度に設計されているので
      // 型推論の上書き処理（`as ContentfulStatusCode`）を実施してもそこまで危険性はない
      return c.json({ error: 'Failed to fetch from Reinfolib' }, response.status as ContentfulStatusCode);
    }

    const result = await response.json(); // Promiseを解決してデータを取得
    return c.json(result);                // 取得済みのデータを Hono がレスポンスとして返す
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
      console.error(e);
    }

    return c.json({ error: 'Internal server error' }, 500);
  }
});

// 周辺施設データ取得用エンドポイント
app.post('/api/reinfolib/facilities', async (c) => {
  try {
    if (!c.env.REINFOLIB_API_KEY) {
      return c.json({ error: 'API Key not configured' }, 500);
    }

    // 施設コードのデフォルト値は「XKT006: 小学校、中学校、高校、大学、各種学校など」で設定
    const { prefName, cityName, facilityCode = "XKT006" } = await c.req.json();

    if (!prefName || !cityName || !facilityCode) {
      console.error(prefName, cityName, facilityCode);
      return c.json({ error: 'prefName, cityName, and facilityCode are required' }, 400);
    }

    // 1. 国土地理院ジオコーディングAPIで緯度経度を取得
    const query = encodeURIComponent(`${prefName}${cityName}`);
    const geoRes = await fetch(`https://msearch.gsi.go.jp/address-search/AddressSearch?q=${query}`);
    if (!geoRes.ok) {
      return c.json({ error: 'Failed to fetch geocoding data' }, 500);
    }

    const geoData = await geoRes.json();
    if (!geoData || geoData.length === 0) {
      return c.json({ error: 'Location not found' }, 404);
    }

    const [lon, lat] = geoData[0].geometry.coordinates;

    // 2. 緯度経度をXYZタイル座標に変換
    const zoom = 15;  // ズームレベル15：詳細情報
    const x = Math.floor((lon + 180.0) / 360.0 * Math.pow(2.0, zoom));
    const y = Math.floor((1.0 - Math.log(Math.tan(lat * Math.PI / 180.0) + 1.0 / Math.cos(lat * Math.PI / 180.0)) / Math.PI) / 2.0 * Math.pow(2.0, zoom));

    // 3. 国交省 不動産情報ライブラリAPIを叩く
    const response = await fetch(
      `https://www.reinfolib.mlit.go.jp/ex-api/external/${facilityCode}?response_format=geojson&z=${zoom}&x=${x}&y=${y}`,
      { headers: { "Ocp-Apim-Subscription-Key": c.env.REINFOLIB_API_KEY } }
    );

    if (!response.ok) {
      return c.json({ error: 'Failed to fetch from Reinfolib Facilities API' }, response.status as ContentfulStatusCode);
    }

    const result = await response.json();
    return c.json(result);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.message);
      console.error(e);
    }
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default app
