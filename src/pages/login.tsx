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
    // <form
    //   classNameName="mt-10 bg-secondary-100"
    //   onSubmit={(e) => {
    //     handleSubmit(e);
    //   }}
    // >
    //   <label>
    //     email address
    //     <input
    //       classNameName="ml-4"
    //       type="text"
    //       value={email}
    //       onChange={(e) => {
    //         handleEmail(e);
    //       }}
    //     />
    //   </label>
    //   <label classNameName="ml-10">
    //     password
    //     <input
    //       classNameName="ml-4"
    //       type="text"
    //       value={password}
    //       onChange={(e) => {
    //         handlePassword(e);
    //       }}
    //     />
    //   </label>
    //   {/* Button need a children props, and need to accept other classNameName*/}
    //   <Button label="login" type="submit" />
    // </form>
    <table className="min-w-full bg-light text-left ">
      <thead>
        <tr>
          <th className="border ">order number</th>
          <th className="border ">First</th>
          <th className="border ">Last</th>
          <th className="border ">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className=" border ">1234</td>
          <td className=" border ">Mark</td>
          <td className=" border ">Otto</td>
          <td className=" border ">@mdo</td>
        </tr>
        <tr>
          <td className=" border  font-medium">2</td>
          <td className=" border ">Jacob 23333453</td>
          <td className=" border ">Thornton</td>
          <td className=" border ">@fat</td>
        </tr>
        <tr>
          <td className=" border ">3</td>
          <td className=" border ">Larry</td>
          <td className=" border ">Wild 1345555666777</td>
          <td className=" border ">@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Login;
