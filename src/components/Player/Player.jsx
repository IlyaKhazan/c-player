import React, { useRef, useState } from "react";

import styles from './Player.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import { currentSong, isPlaying, setIsPlaying } from '../../App'


export const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

    const [songInfo, setSongInfo] = useState({
        duration: '',
        currentTime: '',
    })
    console.log(songInfo)

    const audioRef = useRef(null);
    const handlePlayClick = (evt) => {
        if (isPlaying) { audioRef.current.pause() }
        else { audioRef.current.play() }
        setIsPlaying(prev => !prev)
    }

    const timeUpdateHandler = (evt) => {
        setSongInfo({
            duration: evt.target.duration,
            currentTime: evt.target.currentTime,
        })
    }
    const getTime = (time) => {
        return Math.floor(time / 60) + ':' + ("0" + Math.floor(time % 60)).slice(-2)
    }


    return (
        <div className={styles.player}>
            <div className={styles.timeControl}>
                <p className="start-time">{getTime(songInfo.currentTime)} </p>
                <input className={styles.rangeControl} type="range" name="" id="" />
                <p className="end-time">{getTime(songInfo.duration - songInfo.currentTime)}</p>
            </div>
            <div className={styles.playControl}>
                <FontAwesomeIcon icon={faBackward} />
                <FontAwesomeIcon onClick={handlePlayClick} icon={isPlaying ? faPause : faPlay} size='2x' />
                <FontAwesomeIcon icon={faForward} />
                <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div >
    )



}
