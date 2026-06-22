import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import InputFieldComponent from "../components/input-field-component";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hasEmailError = email.length > 0 && !email.includes("@");
  const hasPasswordError = password.length < 5;

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("로그인 정보", { email, password });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "320px",
        margin: "40px auto",
      }}
    >
      <h1>인증 화면</h1>

      <InputFieldComponent
        id="email"
        label="이메일 입력 창"
        type="email"
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일을 입력해 주세요"
        errorMessage={
          hasEmailError
            ? "이메일에는 @ 문자가 포함되어야 합니다."
            : undefined
        }
      />

      <InputFieldComponent
        id="password"
        label="비밀번호 입력 창"
        type="password"
        value={password}
        onChange={onChangePassword}
        placeholder="비밀번호를 입력해 주세요"
        errorMessage={
          hasPasswordError
            ? "패스워드는 최소  문자가 포함되어야 합니다."
            : undefined
        }
      />

      <button type="submit">로그인</button>
    </form>
  );
};

export default AuthScreen;
