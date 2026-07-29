# getAreaInfoByGemini
- [都道府県別市区町村のエリア情報AI（Gemini）検索](https://getareainfobygemini.pages.dev/)  

各都道府県（※スマホやタブレットでは地域）エリアに触れると当該エリアセクションにジャンプします。当該エリアセクションで市区町村を選ぶとチャットボットが起動して、選択した市区町村における地域情報をAI（Gemini）が情報収集および整理して回答します。

## 技術構成
- @eslint/js@10.0.1
- @tailwindcss/vite@4.3.3
- @types/node@25.9.5
- @types/react-dom@19.2.3
- @types/react@19.2.17
- @vitejs/plugin-react@6.0.4
- eslint-plugin-react-hooks@7.1.1
- eslint-plugin-react-refresh@0.5.3
- eslint@10.8.0
- globals@17.8.0
- react-dom@19.2.8
- react-markdown@10.1.0
- react@19.2.8
- tailwindcss@4.3.3
- typescript-eslint@8.65.0
- typescript@6.0.3
- vite@8.1.5
- zustand@5.0.14

## 必要ファイル
- `.env`
```bash
VITE_CLOUDFLARE_SUBDOMAIN = プロジェクトディレクトリ名.cloudflare-worker名.workers.dev
VITE_CHATBOT_WORKER_ENDPOINT = Chatbotの公開エンドポイント/api/generate
```

### APIエンドポイントの管理ファイル
- [src/features/select-area/constance/reinfolib-config.ts](./src/features/select-area/constance/reinfolib-config.ts)  
[不動産情報ライブラリ](https://www.reinfolib.mlit.go.jp/)を利用した、都道府県別の市区町村データと、施設コードから周辺施設データを取得するAPIエンドポイントの管理ファイル。

- `reinfolib-config.ts`
```ts
// Vite が標準で提供している import.meta.env.DEV を使うと、npm run dev の時は true、ビルド後は false に自動で切り替わる
export const IS_DEV: boolean = import.meta.env.DEV;

// Cloudflare Workers のエンドポイント
// バックエンド処理を「リクエスト時に瞬間起動」するサーバーレス環境（今回のユースケースではエンドポイント設置）
// ローカル開発時は`http://localhost:8787/api/reinfolib`を使用
export const WORKER_ENDPOINT = IS_DEV ?
    'http://localhost:8787/api/reinfolib' :
    `https://${import.meta.env.VITE_CLOUDFLARE_SUBDOMAIN}/api/reinfolib`;

export const WORKER_ENDPOINT_FACILITIES = IS_DEV ?
    'http://localhost:8787/api/reinfolib/facilities' :
    `https://${import.meta.env.VITE_CLOUDFLARE_SUBDOMAIN}/api/reinfolib/facilities`;
```

## 使い方
### 1. バックエンド側（hono / Cloudflare Workers で動作するプロキシ）を起動
```bash
# バックエンド側ディレクトリへ移動
cd reinfolib-proxy

# バックエンド側（hono / Cloudflare Workers で動作するプロキシ）を起動
npm run dev
```

**バックエンド側（hono / Cloudflare Workers で動作するプロキシ）を起動したまま**にしておき、別ターミナルでフロントエンド側を起動する。

### 2. フロントエンド側の開発環境を起動
```bash
# ※ルートディレクトリがカレントディレクトリであることを確認してから
npm run dev
```

> [!NOTE]
> ## Cloudflare Pages でのデプロイ設定時の注意事項
> Vite利用及び初期設定のままの場合、`Build configuration`では以下設定にすること。
> ※以下設定にしないとページが表示されない、またはビルド・デプロイエラーになります。
> ```bash
> Build command: npm run build
> Build output: dist
> ```
