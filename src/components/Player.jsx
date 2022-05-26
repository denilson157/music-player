import React from 'react'
import Queue from './Queue';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Box, Slider } from '@mui/material'

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useContext } from 'react';
import { SongContext } from './Main';

const Player = ({ telaGrande, queue }) => {
    const { currentSong, songDispatch } = useContext(SongContext)

    const handlePlayButton = () => {
        songDispatch({ type: currentSong?.isPlaying ? "PAUSE_SONG" : "PLAY_SONG" })
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

                        <IconButton> <SkipPreviousIcon /></IconButton>
                        <IconButton onClick={handlePlayButton}>

                            {currentSong?.isPlaying ?

                                <PlayArrowIcon style={{ fontSize: '40px' }} />
                                :
                                <PlayArrowIcon style={{ fontSize: '40px' }} />
                            }
                        </IconButton>
                        <IconButton> <SkipNextIcon /></IconButton>
                        <Typography>
                            00:02:02
                        </Typography>

                    </CardActions>

                    <CardMedia image={song?.thumbnail} />

                </Box>

                <Slider type="range" min={0} max={1} step={0.01} sx={{ ml: 3, mr: 3 }} />

            </Card>

            {
                telaGrande &&
                <Queue queue={queue} />
            }
        </>
    )
}

export default Player;