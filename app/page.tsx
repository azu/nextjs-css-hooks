import Image from "next/image";
import styles from "./page.module.css";
import { css } from "@/app/css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1 style={
                    css({
                        color: "red",
                        "&:hover": {
                            color: "blue"
                        }
                    })
                }>Next.js App Router + CSS Hooks</h1>
                <Link href={"sub"} style={{
                    color: "blue"
                }}>SuB Page</Link>
                <p>
                    Source: <a title="azu/nextjs-css-hooks: undefined" href="https://github.com/azu/nextjs-css-hooks">azu/nextjs-css-hooks</a>
                </p>
            </div>
        </main>
    );
}
