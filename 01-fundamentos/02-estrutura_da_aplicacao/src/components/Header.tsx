import styles from "./Header.module.css";

export function Header() {
    console.log(styles)

  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
