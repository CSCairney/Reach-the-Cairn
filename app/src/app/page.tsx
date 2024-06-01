import { Header } from '@/components/home';
import styles from './page.module.css'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reach the Cairn",
  description: 'Offical website of @reachthecairn on instagram',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  )
}
