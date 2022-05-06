import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, Box } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
const MusicList = () => {

    const musicMock =
    {
        Titulo: 'Gigantes',
        Artista: 'BK',
        Imagem: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/b/1/0/6/671611541442093.jpg"
    }

    const Music = ({ music }) => {
        const { Imagem, Artista, Titulo } = music

        return (

            <Card sx={{ display: 'flex', my: 2, p: 1, alignItems: 'center' }}>

                <CardMedia image={Imagem} style={{ objectFit: 'cover', width: '140px', height: '140px' }} />

                <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>

                    <CardContent>
                        <Typography variant="h5" component="h2">{Titulo}</Typography>
                        <Typography variant="subtitle1" component="h3">{Artista}</Typography>
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

                Array.from({ length: 10 }, () => musicMock)
                    .map((music, index) =>
                        <Music key={`songId_${index}`} music={music} />
                    )
            }
        </>
    )
}

export default MusicList;