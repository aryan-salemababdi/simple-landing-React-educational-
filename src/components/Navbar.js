import React from 'react'
import styles from "./Navbar.module.css"
import logo from "../components/img/green-company-logo-design-template-e6cda0adebc58ba974fa4d2d02a14d1e_screen.jpg"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.listcontainer}>
                    <ul className={styles.list}>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/products">product</Link></li>
                        <li><Link to="/">About us</Link></li>
                    </ul>
                </div>
                <div className={styles.logo}>
                    <img className={styles.logo} src={logo} alt='logo' />
                </div>
            </header>
        </div>
    )
}
export default Navbar;