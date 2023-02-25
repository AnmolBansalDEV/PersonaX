import Head from 'next/head'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Brand from '@/components/Brand'
import PromptBar from '@/components/PromptBar'
import Modal from '@/components/Modal'


export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  // console.log("persona:",Personas[1].name)
  return (
    <>
      <Head>
        <title>PersonaX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- google fonts --> */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Manrope:wght@500;700&family=Marko+One&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.app}>
      <Nav />
      <div className={styles.mainSection}>
        <Brand />
        <PromptBar setOpenModal={setOpenModal} />
      </div>
      { openModal && <Modal setOpenModal={setOpenModal} /> }
    </div>
    </>
  )
}
