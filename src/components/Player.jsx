import React from 'react'
import Queue from './Queue';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Box, Slider } from '@mui/material'

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Player = () => {
    return (
        <>

            <Card sx={{ m: 1 }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                    <CardContent sx={{ display: 'flex' }}>

                        <Typography variant="h5" component="h2"> Título da música </Typography>
                        <Typography variant="subtitle1" component="h2"> Nome do artista </Typography>

                    </CardContent>

                    <CardActions >

                        <IconButton> <SkipPreviousIcon /></IconButton>
                        <IconButton> <PlayArrowIcon /></IconButton>
                        <IconButton> <SkipNextIcon /></IconButton>
                        <Typography>
                            00:02:02
                        </Typography>

                    </CardActions>

                    <CardMedia image="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/b/1/0/6/671611541442093.jpg" style={{ objectFit: 'cover', width: '140px', height: '140px' }} />

                </Box>

                <Slider type="range" min={0} max={1} step={0.01} sx={{ ml: 3, mr: 3 }} />

            </Card>

            <Queue />
        </>
    )
}

export default Player;