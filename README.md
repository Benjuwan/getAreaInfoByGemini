# getAreaInfoByGemini
日本地図（インタラクション付きマップUI）内の各都道府県を押下すると該当エリア（選んだ都道府県）にジャンプします。該当エリア内の市区町村を選ぶとチャットボットが起動して選んだ市区町村における○○情報をAIが情報収集および整理して回答してくれるUI機能です。  
※事例として日本地図なだけであり、希望する地域のSVG画像を用意してインタラクション設定すれば汎用可能。

## 技術構成
- @eslint/js@10.0.1
- @tailwindcss/vite@4.2.4
- @types/node@25.6.0
- @types/react-dom@19.2.3
- @types/react@19.2.14
- @vitejs/plugin-react@6.0.1
- eslint-plugin-react-hooks@7.1.1
- eslint-plugin-react-refresh@0.5.2
- eslint@10.2.1
- globals@17.5.0
- react-dom@19.2.5
- react-markdown@10.1.0
- react@19.2.5
- tailwindcss@4.2.4
- typescript-eslint@8.59.0
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
