import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function SignIn() {
  const [user, setUser] = useState({ name: "", formLoading: false });

  const handleChange = (e) => {
    setUser({ name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({
      formLoading: true,
    });
    try {
      setTimeout(() => {
        setUser({ formLoading: false });
      }, 4000);
    } catch (error) {}
  };
  return (
    <div>
      <Head>
        <title>sign in</title>
      </Head>
      <Link href="/">home</Link>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="username"
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        {user.formLoading ? "loading" : "submit"}
      </button>
    </div>
  );
}
