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
