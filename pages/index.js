import Link from "next/link";
import Head from "next/head";
import style from "../styles/Home.module.css";

const App = () => {
  return (
    <div>
      <Head>
        <title>Next example</title>
      </Head>
      <h5>First next app</h5>
      <Link className={style.link} href="/sign/signin">
        sign in
      </Link>
    </div>
  );
};

export default App;
