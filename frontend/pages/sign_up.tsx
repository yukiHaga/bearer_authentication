import Link from "next/link";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState,
  SyntheticEvent,
} from "react";
import { useAuth, SignUpForm } from "~/features/auth";

const SignUp: FC = () => {
  const {
    updateName,
    updateEmail,
    updatePassword,
    updatePasswordConfirmation,
    sendSignUpData,
  } = useAuth();

  const router = useRouter();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = sendSignUpData()
      // 別名をつけている
      .then(({ token: bearer_token }) => {
        localStorage.setItem("bearer_token", bearer_token.token);
        router.push("/mypage");
      })
      .catch(console.error);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">新規会員登録</h1>
      <SignUpForm
        onChangeName={updateName}
        onChangeEmail={updateEmail}
        onChangePassword={updatePassword}
        onChangePasswordConfirmation={updatePasswordConfirmation}
        onSubmit={onSubmit}
      />
      <div>
        <Link href="./login">ログインはこちら</Link>
      </div>
    </div>
  );
};

export default SignUp;
