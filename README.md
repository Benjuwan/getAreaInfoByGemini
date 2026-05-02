# getAreaInfoByGemini
- [都道府県別市区町村のエリア情報AI（Gemini）検索](https://getareainfobygemini.pages.dev/)  

各都道府県（※スマホやタブレットでは地域）エリアに触れると当該エリアセクションにジャンプします。当該エリアセクションで市区町村を選ぶとチャットボットが起動して、選択した市区町村における地域情報をAI（Gemini）が情報収集および整理して回答します。

## 技術構成
- @eslint/js@10.0.1
- @tailwindcss/vite@4.2.4
- @types/node@25.6.0
- @types/react-dom@19.2.3
- @types/react@19.2.14
- @vitejs/plugin-react@6.0.1
- eslint-plugin-react-hooks@7.1.1
- eslint-plugin-react-refresh@0.5.2
- eslint@10.3.0
- globals@17.6.0
- react-dom@19.2.5
- react-markdown@10.1.0
- react@19.2.5
- tailwindcss@4.2.4
- typescript-eslint@8.59.1
- typescript@6.0.3
- vite@8.0.10
- zustand@5.0.12

## 必要ファイル
- `.env`
```bash
VITE_CLOUDFLARE_SUBDOMAIN = プロジェクトディレクトリ名.cloudflare-worker名.workers.dev
VITE_CHATBOT_WORKER_ENDPOINT = Chatbotの公開エンドポイント/api/generate
```

### APIエンドポイントの管理ファイル
- `src/features/select-area/constance/reinfolib-config.ts`  
[不動産情報ライブラリ](https://www.reinfolib.mlit.go.jp/)を利用した、都道府県別の市区町村データと、施設コードから周辺施設データを取得するAPIエンドポイントの管理ファイル。

## Cloudflare Pages でのデプロイ設定時の注意事項
Vite利用及び初期設定のままの場合、`Build configuration`では以下設定にすること。
※以下設定にしないとページが表示されない、またはビルド・デプロイエラーになります。
```bash
Build command: npm run build
Build output: dist
```
