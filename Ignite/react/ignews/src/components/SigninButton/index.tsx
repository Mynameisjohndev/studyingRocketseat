import styles from './styles.module.scss'

export const SigninButton = () => {
  
  const isUserLoggedIn = false;
  
  return isUserLoggedIn ? (
    <button className={styles.signInButton}>
      <img src="./Github.svg"/> 
      Entrar com github
    </button>
  ) : (
    <button className={styles.signInButton}>
      <img src="./SecondGithub.svg"/> 
      João Antônio
      <img className={styles.closeIcon} src="./close.svg"/> 
    </button>
  )
} 