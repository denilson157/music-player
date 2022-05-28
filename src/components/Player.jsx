import React from 'react'
import Queue from './Queue';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Box, Slider } from '@mui/material'

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useContext } from 'react';
import { SongContext } from './Main';
import ReactPlayer from 'react-player';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { PhotoLibraryOutlined } from '@mui/icons-material';

const Player = ({ telaGrande, queue }) => {
    const { currentSong, songDispatch } = useContext(SongContext)
    const [playedSong, setPlayedSong] = useState(0);
    const [changing, setChanging] = useState(false);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [queuePosition, setQueuePosition] = useState(0);

    const reactPlayerRef = useRef();


    useEffect(() => {
        const songIndex = queue.currentQueue.findIndex((song) => currentSong.song.id === song.id);

        setQueuePosition(songIndex)
    }, [queue, currentSong.song.id])

    useEffect(() => {
        if (playedSong > 0.99)
            handleSongNext();
    }, [playedSong])

    const handlePlayButton = () => {
        songDispatch({ type: currentSong?.isPlaying ? "PAUSE_SONG" : "PLAY_SONG" })
    }

    const handleProgressSong = ({ played, playedSeconds }) => {
        if (!changing)
            setPlayedSong(played)

        setPlayedSeconds(playedSeconds);
    }

    const handleSliderChange = (event, newValue) => {
        setPlayedSong(newValue)
        reactPlayerRef.current.seekTo(playedSong);
    }

    const handleSliderChanging = () => {
        setChanging(true)
    }

    const handleSliderChanged = () => {
        setChanging(false)
    }

    const handleSongPrevious = () => {
        const nextSong = queue.currentQueue[queuePosition - 1];
        if (nextSong)
            songDispatch({ type: 'CHANGE_SONG', paylod: { music: nextSong } })

    }

    const handleSongNext = () => {
        const nextSong = queue.currentQueue[queuePosition + 1];
        if (nextSong)
            songDispatch({ type: 'CHANGE_SONG', paylod: { music: nextSong } })
    }

    const song = currentSong?.song

    return (
        <>

            <Card sx={{ m: 1 }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <CardContent sx={{ display: 'flex' }}>

                        <Typography variant="h5" component="h2"> {song?.title} </Typography>
                        <Typography variant="subtitle1" component="h2"> {song?.artist} </Typography>

                    </CardContent>

                    <CardActions >

                        <IconButton onClick={handleSongPrevious}>
                            <SkipPreviousIcon />
                        </IconButton>
                        <IconButton onClick={handlePlayButton}>

                            {currentSong?.isPlaying ?

                                <PlayArrowIcon style={{ fontSize: '40px' }} />
                                :
                                <PlayArrowIcon style={{ fontSize: '40px' }} />
                            }
                        </IconButton>
                        <IconButton onClick={handleSongNext}>
                            <SkipNextIcon />
                        </IconButton>
                        <Typography>
                            {new Date(playedSeconds * 1000).toISOString().substr(11, 8)}
                        </Typography>

                    </CardActions>

                    <CardMedia image={song?.thumbnail} />

                </Box>

                <Slider
                    key="slider"
                    value={playedSong}
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    sx={{ ml: 3, mr: 3 }}
                    onChange={handleSliderChange}
                    onMouseDown={handleSliderChanged}
                    onMouseUp={handleSliderChanging}
                />

                <ReactPlayer ref={reactPlayerRef} onProgress={handleProgressSong} hidden url={currentSong.song.url} playing={currentSong.isPlaying} />
            </Card>

            {
                telaGrande &&
                <Queue queue={queue} />
            }
        </>
    )
}

export default Player;