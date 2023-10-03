/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind.config.jsファイルにすべてのテンプレートファイルのパスを追加します。
  // Tailwindには、出力するCSSファイルを最適化するために、HTMLのテンプレートファイルなどに含まれるクラス名を検出するしくみが備わっています。
  // それによって、必要なクラスだけがCSSファイルとして出力されます。
  // このcontentでは、Tailwindのクラス名を使用するすべてのファイルにマッチするようにパスを指定します。
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
