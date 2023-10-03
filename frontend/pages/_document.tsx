import { Html, Head, Main, NextScript } from "next/document";

// カスタム・ドキュメントは、ページのレンダリングに使われる<html>タグと<body>タグを
// 更新することができます。
// デフォルトのドキュメントを上書きするには、以下のようにpages/_documentファイルを作成します：
// documentはサーバー上でのみレンダリングされるので、onClickのようなイベント・ハンドラはこのファイルでは使用できません。
// <Html>, <Head />, <Main />, <NextScript />は、ページが正しくレンダリングされるために必要です。
// documentで使われている<head />コンポーネントは、next/headと同じではありません。ここで使われている<head />コンポーネントは、
// すべてのページに共通する<head>コードにのみ使うべきです。
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
