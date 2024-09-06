import styles from './CourseCard.module.css'
import star from '@/assets/star.png'
import brand from '@/assets/Brand.png'
import saveButton from '@/assets/save-button.png'
import { useNavigate } from 'react-router-dom'

const CourseCard = () => {
  return (
    <article className={styles.card} onClick={() => window.location.href = "/explorer/course"}>
      <header className={styles.cardHeader}>
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDI5MnwwfDF8c2VhcmNofDI5fHx3YWxscGFwZXJ8ZW58MHx8fHwxNzI1NDY4OTU4fDA&ixlib=rb-4.0.3&q=80&w=1080"
        />
        <span className={styles.cardBadgeNew}>new</span>
      </header>
      <section className={styles.cardBody}>
        <div className={styles.cardInfo}>
          <header className={styles.cardInfoHeader}>
            <div className={styles.cardBrand}>
              <img src={brand} />
              <span>Tu Plataforma</span>
            </div>
            <button><img src={saveButton} /></button>
          </header>
          <h3 className={styles.cardTitle}>Lapzo jumpstart: aprendiendo a volar</h3>
          <div className={styles.cardReviews}>
            <img src={star} />
            <span>0 (0 reseñas)</span>
          </div>
          <footer className={styles.cardInfoFooter}>
            <span>E-learning</span>
            <span>E-learning</span>
          </footer>
        </div>
        <button className={styles.cardCallToAction}>
          Ver detalle
        </button>
      </section>
    </article>
  )
}

export default CourseCard
