import { useState, ChangeEvent, useCallback } from "react";

type SignUpResponse = {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: {
    id: number;
    token: string;
    created_at: Date;
    updated_at: Date;
  };
};

export function useAuth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const sendSignUpData = async (): Promise<SignUpResponse> => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    });

    return response.json();
  };

  const updateName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const updateEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const updatePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const updatePasswordConfirmation = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirmation(e.target.value);
    },
    []
  );

  return {
    updateName,
    updateEmail,
    updatePassword,
    updatePasswordConfirmation,
    sendSignUpData,
  };
}
