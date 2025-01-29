import styles from "./style.module.scss";
import { Link } from "react-router";
import logo from '../../../public/logo.png'

export function Header() {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" className={styles.header__logo_img} />
        <p className={styles.header__logo_text}>SearchPlayer</p>
      </div>
      <div className={styles.header__links}>
        <Link className={styles.header__links_btn} to="/search">Искать</Link>
        <Link className={styles.header__links_btn} to="/players">Игроки</Link>
      </div>
      {/* переписать на Link */}
      <div className={styles.header__account}>
        <p className={styles.header__account_login}>Вход</p>
        <p className={styles.header__account_signup}>Регистрация</p>
      </div>
    </div>
    </>
  );
}
