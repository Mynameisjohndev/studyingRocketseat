import Head from '../../node_modules/next/head'
import { SubscribeButton } from '../components/SubscribeButton/Index'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News abount the <span>React</span> world.</h1>
          <p>Get acess to all the publications <br/> 
            <span>for $9,90 month</span>
          </p>
          <SubscribeButton/>
        </section>
        <img src='./Mulher.svg' alt='woman-codding'/>
      </main>
    </>
  )
}
