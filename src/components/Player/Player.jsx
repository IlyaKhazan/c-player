import React from "react";

import styles from './Player.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faForward } from '@fortawesome/free-solid-svg-icons'
import { faBackward } from '@fortawesome/free-solid-svg-icons'




export const Player = () => {
    return (
        <div className={styles.player}>
            <div className={styles.timeControl}>
                <p className="start-time">Start time</p>
                <input className={styles.rangeControl} type="range" name="" id="" />
                <p className="end-time">End time</p>
            </div>
            <div className={styles.playControl}>
                <FontAwesomeIcon icon={faBackward} />
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faForward} />
            </div>
        </div >
    )



}
