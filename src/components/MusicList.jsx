import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Box } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { useQuery } from '@apollo/client';
import { GET_SONGS } from '../graphql/song/query'


const MusicList = () => {

    const { data, loading, error } = useQuery(GET_SONGS)

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

        return (

            <Card sx={{ display: 'flex', my: 2, p: 1, alignItems: 'center' }}>

                <CardMedia image={thumbnail} style={{ objectFit: 'cover', width: '140px', height: '140px' }} />

                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>

                    <CardContent>
                        <Typography variant="h5" component="h2">{title}</Typography>
                        <Typography variant="subtitle1" component="h3">{artist}</Typography>
                    </CardContent>

                    <CardActions>

                        <IconButton>

                            <PlayArrowIcon color="secondary" />
                        </IconButton>

                        <IconButton>

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