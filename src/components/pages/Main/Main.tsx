import { useRoutes } from 'react-router-dom';
import Wrapper from "@/components/Layout/Wrapper"
import Header from "@/components/UI/Header"
import Sidebar from "@/components/UI/Sidebar"
import styles from './Main.module.css'
import routes from '@/routes';

const Main = () => {
  const adminRoute = useRoutes(routes);

  return (
    <section className={styles.mainWrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <Sidebar />
        {adminRoute}
      </main>
    </section>

  )
}

export default Main
