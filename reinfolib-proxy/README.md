## hono / cloudflare workers インストール方法
- [Cloudflare Workers](https://hono.dev/docs/getting-started/cloudflare-workers)

### 1. npm でのインストール例
インストールしたいプロジェクトルートで以下を実行
```bash
npm create hono@latest バックエンド側のディレクトリ名
```

### 2. 以下の技術構成にあたるライブラリをインストール
先ほど作成した バックエンド側のディレクトリ名 に移動してライブラリをインストール
```bash
cd バックエンド側のディレクトリ名
npm i
```

## 技術構成
- hono@4.12.9
- wrangler@4.77.0

## 必要ファイル
- `reinfolib-proxy/.dev.vars`
```bash
REINFOLIB_API_KEY = 不動産APIキー
```

### 不動産APIの呼び出し例
```ts
const response = await fetch('/api/reinfolib', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prefCode: '13' }), // 例：東京都
});

const data = await response.json();
```

## Cloudflare Workers にデプロイ
`reinfolib-proxy`にいる状態で以下のコマンドを実施
```bash
npx wrangler deploy
```

- Note: [**エンドポイントへのアクセスをホワイトリスト形式にする場合**](#cors設定の更新)

### 環境変数（REINFOLIB_API_KEY キー）の設定
※今回設定する環境変数名は`REINFOLIB_API_KEY`
```bash
npx wrangler secret put <環境変数名>
```

1. このコマンドを打つと`Enter a secret value:`と聞かれる
2. REINFOLIB_API_KEY キーをペーストして`Enter`を押下で設定完了

---

`npx wrangler deploy`が成功したときに表示された URL（例: https://reinfolib-proxy.あなたのアカウント.workers.dev）が公開エンドポイント。  
これを、フロントエンド側の`.env`ファイルに設定すれば完了（※）。

#### ※公開エンドポイントには、バックエンドドメインだけではなく末尾に`/api/reinfolib`を付けること
`/api/reinfolib`は、`reinfolib-proxy/src/index.ts`で設定したエンドポイントパスです。
```bash
# 生成したバックエンドドメインだけではなく、末尾に /api/reinfolib を付ける
VITE_WORKER_ENDPOINT = https://reinfolib-proxy.あなたのアカウント.workers.dev/api/reinfolib
```

> [!NOTE]
> ##### CORS設定の更新
> 1. `reinfolib-proxy/config/theConfig.ts`の`ALLOWED_ORIGINS`に埋め込み対象ドメインを追加
> 2. `reinfolib-proxy/src/index.ts`のコードを現状の「全許可」から「制限付き」に書き換える（※コメントアウトを切り替える）
> 3. 再度 `npx wrangler deploy`する
