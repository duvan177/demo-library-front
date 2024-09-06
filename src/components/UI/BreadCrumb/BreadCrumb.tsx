import styles from './BreadCrumb.module.css'

const BreadCrumb = () => {
  return (
    <nav className={styles.breadCrumb}>
      <ul className={styles.breadCrumList}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <a href="/explorer">Explorador</a>
        </li>
      </ul>
    </nav>
  )
}

export default BreadCrumb
