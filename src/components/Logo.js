import React from 'react'
import styles from "../components/Logo.module.css";
import apple from "../components/img/type-apple-logo.jpg"
const Logo = () => {
    return (
        <div className={styles.container}>
            <h3>who support us?</h3>
            <img src={apple} alt="apple" />
            <img src={apple} alt="apple" />
            <img src={apple} alt="apple" />
        </div >
    )
}

export default Logo