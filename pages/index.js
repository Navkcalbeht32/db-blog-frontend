import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Waves from '../components/Waves'
import Tracks from '../components/Tracks'
import PageLayout from '../components/PageLayout'
import Work from '../components/Work'
import config from 'react-reveal/globals'
import Footer from "../components/Footer"

config({ ssrFadeout: true });

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Danny Balentine | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </Head>
      <PageLayout>
        <Hero />
        <Waves />
        <Tracks />
        <Work />
        <Footer />
      </PageLayout>
    </div>
  )
}


