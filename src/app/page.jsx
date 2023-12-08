import styles from './page.module.css'
import CategoryList from './component/categoryList/CategoryList'
import CardList from './component/cardList/CardList'
import Menu from './component/menu/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
        <CategoryList />
        <div className={styles.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}
