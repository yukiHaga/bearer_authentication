import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello Next.js!</h1>
      <h2>aiueo</h2>
      <div className="flex flex-col items-start gap-3">
        <img src="./mogura.png" />
        <div className="flex flex-row gap-3">
          <Link href="./login">ログインはこちら</Link>
          <span>/</span>
          <Link href="./sign_up">サインアップはこちら</Link>
        </div>
      </div>
    </div>
  );
}
