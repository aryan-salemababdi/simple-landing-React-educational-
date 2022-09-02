import React from 'react'
import styles from "../components/banner.module.css";
import banner from "../components/img/Lovepik_com-605725549-Double eleven 25D shopping spree background.jpg"

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt='banner' />
            <div className={styles.textcontainer}>
                <h1>Esay Buy</h1>
                From  <span>Digital Novin</span>
            </div>
        </div>
    );
};
export default Banner;

