import React from "react";
import styles from './Song.module.scss'

export const Song = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Picture</p>
            <p className={styles.text}>Song title</p>
            <p className={styles.text}>Artist</p>
        </div>
    )
}