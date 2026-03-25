import { ContentfulStatusCode } from "hono/utils/http-status";

/**
 *【CAUTION】
 * HonoはHTTPステータスコードの事前想定含めて高度に設計されているので、この型ガード関数`_checkHonoStatusCode`や`resStatusType`型などの設定は本来不要で`as ContentfulStatusCode`として型推論の上書き処理で事足りる。
 * が、構造的部分型と型ガード関数の組み合わせの後学および備忘録のために残している。
*/

// 左辺オペランドが右辺オペランドの構造的部分型かどうかを判定して型定義を分岐（false値は適当なエラーコードとしてBad Request）
type resStatusType = ContentfulStatusCode extends number ? ContentfulStatusCode : 400;

// Honoのステータスコードを扱うための型ガード関数
// この型ガード関数（`checkHonoStatusCode`）を条件式にあてはめることで true 時の場合のみ意図した型定義`resStatusType`として扱われる

/**
 * コンパイル後のJS実行環境（※）では`checkHonoStatusCode`は真偽値を返す関数となってしまい、常に false となる。そのため以下のような型ガード分岐がスキップされる（エラーコードが返されない）ので本環境での使用は非推奨。
 * ※ブラウザはTSを理解できないので JSにコンパイルしてから処理を実行する
  if (checkHonoStatusCode(response.status)) {
    return c.json({ error: 'Failed to fetch from Reinfolib' }, response.status);
  }
*/

// コンパイル後のJS実行環境では、常に false が返ってくる（`response.status`は必ず数値型）ので当ファイル自体が無用なもの。
export const checkHonoStatusCode = (resStatus: number): resStatus is resStatusType => {
    if (typeof resStatus !== 'number') {
        return true;
    }
    return false;
}
