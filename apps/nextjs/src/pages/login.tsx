import { NextPage } from "next";
import React, { FormEventHandler } from "react";
import { trpc } from "../utils/trpc";

const Login: NextPage = () => {
  const mutation = trpc.auth.login.useMutation({
    onSuccess: () => {
      console.log("AAAA");
    },
  });
  let token = "";
  const handleLogin: FormEventHandler = (e) => {
    e.preventDefault();
    const email = (document.getElementById("email-input") as HTMLInputElement)
      .value;
    const password = (
      document.getElementById("password-input") as HTMLInputElement
    ).value;
    mutation.mutateAsync({ email, password });
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email-input" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password-input" />
        <button className="bg-gray-700 text-white">Login</button>
      </form>
    </div>
  );
};

export default Login;
