// 有个地方登陆
// 登陆后：1. set bear token，2.router.push

import Button from "@/components/buttons";
import { appFetch } from "@/utils/fetchHelper";
import tokenHandler from "@/utils/tokenHandler";
import { FormEvent, useState, useEffect, ChangeEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("liuchuan_an@hotmail.com");
  const [password, setPassword] = useState("abcd1234");
  useEffect(() => {
    const isLogin = appFetch({
      method: "GET",
      path: "",
    });
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      tokenHandler.removeToken();
      const response = await fetch(`${process.env.TAOTIFY_BACKEND_URL}/users/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }).then((r) => r.json());
      console.log(response, "after fetch response");
      const { user, token } = response;
      tokenHandler.setToken(email, user, token);
    } catch (error) {}
  };
  //TODO: Combine handlePassword and handleEmail
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: consider debounce
    setPassword(e.target.value);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <form
      className="mt-10 bg-secondary-100"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>
        email address
        <input
          className="ml-4"
          type="text"
          value={email}
          onChange={(e) => {
            handleEmail(e);
          }}
        />
      </label>
      <label className="ml-10">
        password
        <input
          className="ml-4"
          type="text"
          value={password}
          onChange={(e) => {
            handlePassword(e);
          }}
        />
      </label>
      {/* Button need a children props, and need to accept other className*/}
      <Button label="login" type="submit" />
    </form>
  );
};
export default Login;
