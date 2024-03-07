import Image from 'next/image'
import styles from './page.module.css'
import { Metadata } from 'next';
import LocalStorage from '@/components/common/LocalStorage';

export const metadata: Metadata = {
  title: "Reach the Cairn",
  description: 'Offical website of @reachthecairn on instagram',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <LocalStorage />
      <div className={styles.description}>
        <h1>Reach the Cain</h1>
        <h2 className={styles.heading}>This is the landing page of reach the cairn</h2>
      </div>
    </main>
  )
}
