import styles from './styles.module.scss'
export const Header = () => {
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="logo.svg" alt="logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a className={styles.active}>Posts</a>
        </nav>
      </div>
    </header>
  )
}