# getAreaInfoByGemini
日本地図（インタラクション付きマップUI）内の各都道府県を押下すると該当エリア（選んだ都道府県）にジャンプします。該当エリア内の市区町村を選ぶとチャットボットが起動して選んだ市区町村における○○情報をAIが情報収集および整理して回答してくれるUI機能です。  
※事例として日本地図なだけであり、希望する地域のSVG画像を用意してインタラクション設定すれば汎用可能。

## 技術構成
- @eslint/js@9.39.4
- @tailwindcss/vite@4.2.2
- @types/node@24.12.0
- @types/react-dom@19.2.3
- @types/react@19.2.14
- @vitejs/plugin-react@6.0.1
- eslint-plugin-react-hooks@7.0.1
- eslint-plugin-react-refresh@0.5.2
- eslint@9.39.4
- globals@17.4.0
- react-dom@19.2.4
- react-markdown@10.1.0
- react@19.2.4
- tailwindcss@4.2.2
- typescript-eslint@8.57.1
- typescript@5.9.3
- vite@8.0.1

## ToDo / Wants
- 不動産APIの設定
    - サーバーアクション or useSWRを用いた汎用コンポーネント
- chatbot呼び出しエンドポイントの設定
- AIに情報集及び回答してもらう、選択したエリア情報のテーマ選定及びプロンプト調整
