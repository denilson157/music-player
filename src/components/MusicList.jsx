import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Box } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { useQuery, useSubscription } from '@apollo/client';
import { GET_SONGS } from '../graphql/subscription'
import { useContext } from 'react';
import { SongContext } from './Main';


const MusicList = ({ queue }) => {

    const { data, loading, error } = useSubscription(GET_SONGS)


    if (loading)
        return <div>
            Carregando...
        </div>

    if (error) {
        console.log(error)
        return <div>Erro rapá</div>
    }


    const Music = ({ music }) => {
        const { thumbnail, artist, title } = music
        const { currentSong, songDispatch } = useContext(SongContext)

        const handleChangeSong = () => {
            songDispatch({ type: 'CHANGE_SONG', paylod: { music } })
            songDispatch({ type: currentSong.isPlaying && currentSong?.song?.id === music.id ? "PAUSE_SONG" : "PLAY_SONG" })
        }

        const handleAddQueue = () => {
            queue.queueDispatch({ type: "ADD_QUEUE", payload: music })
        }

        return (

            <Card sx={{ display: 'flex', my: 2, p: 1, alignItems: 'center' }}>

                <CardMedia image={thumbnail} style={{ objectFit: 'cover', width: '140px', height: '140px' }} />

                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>

                    <CardContent>
                        <Typography variant="h5" component="h2">{title}</Typography>
                        <Typography variant="subtitle1" component="h3">{artist}</Typography>
                    </CardContent>

                    <CardActions>

                        <IconButton onClick={handleChangeSong}>

                            {currentSong.isPlaying && currentSong?.song?.id === music.id ?

                                <PlayArrowIcon />
                                :
                                <PlayArrowIcon />
                            }
                            <PlayArrowIcon color="secondary" />

                        </IconButton>

                        <IconButton onClick={handleAddQueue}>

                            <QueueMusicIcon color="secondary" />

                        </IconButton>

                    </CardActions>

                </Box>
            </Card>
        )
    }


    return (
        <>
            {

                data.song
                    .map(music =>
                        <Music key={`songId_${music.id}`} music={music} />
                    )
            }
        </>
    )
}

export default MusicList;