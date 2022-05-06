import { Avatar, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Queue = () => {

    const musicMock =
    {
        Titulo: 'Gigantes',
        Artista: 'BK',
        Imagem: "https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/b/1/0/6/671611541442093.jpg"
    }

    const Music = ({ music }) => {
        const { Imagem, Artista, Titulo } = music

        return (
            <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '50px auto 50px', alignItems: 'center', marginBottom: '8px' }}>
                <Avatar src={Imagem} alt="CapaCD" style={{ width: '40px', height: '40px' }} />
                <div>
                    <Typography variant="subtitle2" component="h2">{Titulo}</Typography>
                    <Typography variant="body2" component="h3">{Artista}</Typography>
                </div>
                <IconButton>
                    <DeleteIcon color="error"/>
                </IconButton>

            </div>
        )
    }


    return (
        <>
            <Typography>
                Fila(5)
            </Typography>
            {

                Array.from({ length: 4 }, () => musicMock)
                    .map((music, index) =>
                        <Music key={`songId_${index}`} music={music} />
                    )
            }
        </>
    )
}

export default Queue;