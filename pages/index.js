import Head from 'next/head'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav'
import Brand from '@/components/Brand'
import PromptBar from '@/components/PromptBar'
import Modal from '@/components/Modal'


export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Head>
        <title>PersonaX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
