import React from "react";
import styles from './Song.module.scss'

import { currentSong } from '../../App'

export const Song = ({ currentSong }) => {
    return (
        <div className={styles.container}>
            <img src={currentSong.cover} alt="" />
            <p className={styles.title}>{currentSong.title}</p>
            <p className={styles.artist}>{currentSong.artist}</p>
        </div>
    )
}