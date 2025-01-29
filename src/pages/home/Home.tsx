/* eslint-disable react/react-in-jsx-scope */
import { Header } from "../../components/header/Header";
import styles from "./style.module.scss"

export function Home() {
  return (
    <>
    <div className={styles.container}>
      <Header />
    </div>
    </>
  );
}
