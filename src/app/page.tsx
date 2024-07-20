import Image from "next/image";
import styles from "./page.module.css";

import Card from "@/components/Card";
import { data } from "@/DataStore";
import { Card as C, template } from "@/types";

let cards: C[] = [...template, ...data];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/DataStore.json</code>
        </p>
        <div>
          <a
            href="https://dbit.acm.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            In Collaboration with{" "}
            <Image
              src="/acm.png"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={50}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1 className={styles.logo}>CONTRIBUTE TO THIS PROJECT</h1>
        <br />
        <p>
          Learn GitHub Basics and Make Your First Contribution Quickly and Easily.
        </p>
        <a
          href="https://github.com/TYPESAFE-RUSTY/contribute-to-this-repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started <span>-&gt;</span>
        </a>
      </div>

      <div className={styles.grid}>
        {
          cards.map((element, index) => <Card key={index} className={styles.card} data={element} />)
        }
      </div>
    </main>
  );
}
