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
- hono@4.12.8
- wrangler@4.76.0

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
