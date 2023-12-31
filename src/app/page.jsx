import styles from './page.module.css'
import CategoryList from '../components/categoryList/CategoryList'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

export default function Home(searchParams) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
        <CategoryList />
        <div className={styles.content}>
            <CardList page={page}/>
            <Menu />
        </div>
    </div>
  )
}
