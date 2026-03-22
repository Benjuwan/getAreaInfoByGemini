import { Hono } from 'hono'
import { cors } from 'hono/cors';

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
      return c.json({ error: 'Failed to fetch from Reinfolib' }, response.status);
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


export default app
