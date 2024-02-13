import styles from '@/styles/skeletons/GameSection_skeleton.module.css'

export const GamePage_skeleton = () => {
  return (
    <section className={styles.container}>
      <div className={styles.canvas}>
        <h4 className={styles.loading} >Cargando...</h4>
      </div>
      <div className={styles.form_container}>
        <div className={styles.form} />
        <div className={styles.form_button_group}>
          <div className={styles.form_button} />
          <div className={styles.form_button} />
        </div>
      </div>
      </section>
  )
}
