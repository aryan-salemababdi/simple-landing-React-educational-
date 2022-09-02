import React from 'react'
import styles from "./search.module.css"
const Search = () => {
    return (
        <div className={styles.container}>
            <p>what do you want?</p>
            <input placeholder="what do you want?" />
        </div>
    )
}

export default Search