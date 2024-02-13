import styles from '@/styles/skeletons/UserPage_skeleton.module.css'
export const UserPage_skeleton = () => {
  return (
    <section className={styles.container}>
      <section className={styles.user_section}>
        <h4 className={styles.loading}>cargando...</h4>
        <div className={styles.user_card}>
          <div className={styles.user_name}/>
          <div className={styles.user_social_group}>
            <div className={styles.user_social}/>
            <div className={styles.user_social}/>
            <div className={styles.user_social}/>
            <div className={styles.user_social}/>
          </div>
        </div>
      </section>
      <section className={styles.score_section}>
        <header className={styles.score_title}>Puntuación</header>
        <section className={styles.score_cards_group}>
          <div className= {styles.category_card}>
          <h4 className={styles.loading}>cargando...</h4>
            <div className= {styles.category_card_name}/>
            <div className= {styles.category_card_score_group}>
              <div className= {styles.category_card_score}/>
              <div className= {styles.category_card_score}/>
              <div className= {styles.category_card_score}/>
            </div>
          </div>
          <div className= {styles.category_card}>
            <h4 className={styles.loading}>cargando...</h4>
            <div className= {styles.category_card_name}/>
            <div className= {styles.category_card_score_group}>
              <div className= {styles.category_card_score}/>
              <div className= {styles.category_card_score}/>
              <div className= {styles.category_card_score}/>
            </div>
          </div>
          <div className= {styles.category_card}>
            <h4 className={styles.loading}>cargando...</h4>
            <div className= {styles.category_card_name}/>
            <div className= {styles.category_card_score_group}>
              <div className= {styles.category_card_score}/>
              <div className= {styles.category_card_score}/>
              <div className= {styles.category_card_score}/>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}
