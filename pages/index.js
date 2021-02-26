import Head from "next/head";
import Link from "next/link";
import { Footer } from "../comps/Footer";
import { Navbar } from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Users list | home</title>
        <meta name="keywords" content="users"/>
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
        aperiam dolores optio at dicta voluptatem quasi, sequi est nisi.
        Voluptatibus incidunt quibusdam quae vero beatae odio eius unde a ipsam?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quae,
        molestiae nemo itaque mollitia laudantium, reiciendis repellendus quam
        sequi vitae dolorem est facilis? Excepturi, corrupti! Voluptatem
        aspernatur maxime quibusdam animi.
      </p>
      <Link href='/users'>
        <a className={styles.btn}> See list</a>
      </Link>
    </div>
  );
}
