import type { AppProps } from "next/app";

import "styles/globals.css";

// Next.jsはAppコンポーネントを使ってページを初期化します。
// このコンポーネントをオーバーライドして、ページの初期化を制御することができます：
// ↓ メリット
// 1. Create a shared layout between page changes
// 2. Inject additional data into pages
// 3. 全ページで必要な挙動をかけたりもする
// pagePropsはデータ取得メソッドの1つによってあなたのページにプリロードされた
// 初期プロップを持つオブジェクトで、そうでなければ空のオブジェクトです。
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
