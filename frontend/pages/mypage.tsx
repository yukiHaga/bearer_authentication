import React, { useEffect } from "react";

type Response = {
  user: {
    id: number;
    name: string;
    email: string;
  };
};

const MyPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">マイページへようこそ</h1>
    </div>
  );
};
