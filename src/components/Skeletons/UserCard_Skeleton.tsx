import styles from '@/styles/skeletons/UserCard_Skeleton.module.css'

export const UserCard_Skeleton = () => {
  return (
    <section className={styles.content}>
      <div className={styles.circle}/>
      <div className={styles.box}/>
    </section>
  )
}
