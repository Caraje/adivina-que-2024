import AsideRankings from '@/components/Home/AsideRankings'
import { SelectCategory } from '@/components/Home/SelectCategory'
import styles from '@/styles/Home/homePage.module.css'
export default function HomePage() {
  return (
    <div className={styles.container}>
      <SelectCategory />
      <AsideRankings />
    </div>
  )
}
