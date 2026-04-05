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
- hono@4.12.10
- wrangler@4.80.0

## 必要ファイル
- `reinfolib-proxy/.dev.vars`
```bash
REINFOLIB_API_KEY = 不動産APIキー
WORKER_ENDPOINT_FACILITIES = 設定した公開エンドポイント/api/reinfolib/facilities
```

## 不動産APIの呼び出し例
```ts
// 公開エンドポイントパスの末尾にHonoで設定したパス（`/api/reinfolib`）を付ける
const response = await fetch('Cloudflare Workers で設定した公開エンドポイントパス/api/reinfolib', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prefCode: '13' }), // 例：東京都
});

const data = await response.json();
```

### 呼び出せる周辺施設コード一覧
- [API操作説明 | 不動産情報ライブラリ](https://www.reinfolib.mlit.go.jp/help/apiManual/)より抜粋

| コード   | 種別                         | 内容                                       |
|----------|------------------------------|--------------------------------------------|
| XKT004   | 小学校区                     | 学区のポリゴンデータ                       |
| XKT005   | 中学校区                     | 学区のポリゴンデータ                       |
| XKT006   | 学校                         | 小学校、中学校、高校、大学、各種学校など   |
| XKT007   | 保育園・幼稚園等             | 保育所、認定こども園、幼稚園など           |
| XKT010   | 医療機関                     | 病院、診療所、歯科診療所など               |
| XKT011   | 福祉施設                     | 老人ホーム、介護施設、障害者支援施設など   |
| XKT017   | 図書館                       | 公立図書館など                             |
| XKT018   | 市区町村役場及び集会施設等   | 役所、公民館、公会堂など                   |
| XKT019   | 自然公園地域                 | 国立公園、国定公園など                     |

## Cloudflare Workers にデプロイ
`reinfolib-proxy`にいる状態で以下のコマンドを実施
```bash
npx wrangler deploy
```

※`npx wrangler deploy`が成功したときに表示される URL（例: https://reinfolib-proxy.あなたのアカウント.workers.dev）が公開エンドポイント

- Note: [**エンドポイントへのアクセスをホワイトリスト形式にする場合**](#cors設定の更新)

### 環境変数（REINFOLIB_API_KEY キー）の設定
※今回設定する環境変数名は`REINFOLIB_API_KEY`
```bash
npx wrangler secret put <環境変数名>
```

1. このコマンドを打つと`Enter a secret value:`と聞かれる
2. 対象 API_KEY キーの内容をペーストして`Enter`を押下で設定完了

---

- 公開エンドポイントには Honoで設定したパス（`reinfolib-proxy/src/index.ts`の`app.post`箇所）を付与すること  
※`/api/reinfolib` および `/api/reinfolib/facilities` は、`reinfolib-proxy/src/index.ts`で設定したエンドポイントパスです。
```bash
# 末尾にHonoで設定したパス（`/api/reinfolib` や `/api/reinfolib/facilities`）を付ける
WORKER_ENDPOINT = https://reinfolib-proxy.あなたのアカウント.workers.dev/api/reinfolib
WORKER_ENDPOINT_FACILITIES = https://reinfolib-proxy.あなたのアカウント.workers.dev/api/reinfolib/facilities
```

> [!NOTE]
> #### CORS設定の更新
> 1. `reinfolib-proxy/config/theConfig.ts`の`ALLOWED_ORIGINS`に埋め込み対象ドメインを追加
> 2. `reinfolib-proxy/src/index.ts`のコードを現状の「全許可」から「制限付き」に書き換える（※コメントアウトを切り替える）
> 3. 再度 `npx wrangler deploy`する
