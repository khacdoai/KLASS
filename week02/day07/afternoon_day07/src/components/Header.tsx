import { Link } from 'react-router'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Magazines</div>
      <nav>
        <ul className={styles.menu}>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/customer">Customer</Link></li>
          <li className={styles.cart}>🛒 <span>0</span></li>
        </ul>
      </nav>
    </header>
  )
}
