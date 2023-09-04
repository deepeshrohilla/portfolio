import { Hero } from '@/components/Hero';
import styles from './page.module.css';
import { AboutMe } from '@/components/AboutMe';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <AboutMe/>
    </main>
  )
}
