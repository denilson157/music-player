import { Avatar, IconButton, Typography, Box } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Queue = ({ queue }) => {

    const Music = ({ music }) => {
        const { thumbnail, artist, title } = music

        const removeMusic = () => {
            queue.queueDispatch({ type: 'REMOVE_QUEUE', payload: { music } })
        }

        return (
            <Box
                sx={{
                    transition: 'all 0.2s ease',
                    '&:hover': {
                        backgroundColor: '#0000004a',
                        transition: 'all 0.2s ease'
                    }
                }}
                style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '50px auto 50px', alignItems: 'center', marginBottom: '8px' }}>
                <Avatar src={thumbnail} alt="CapaCD" style={{ width: '40px', height: '40px' }} />
                <div>
                    <Typography variant="subtitle2" component="h2">{title}</Typography>
                    <Typography variant="body2" component="h3">{artist}</Typography>
                </div>
                <IconButton onClick={removeMusic}>
                    <DeleteIcon color="error" />
                </IconButton>

            </Box>
        )
    }


    return (
        <>
            <Typography>
                Fila{` (${queue.currentQueue.length})`}
            </Typography>
            {

                queue.currentQueue
                    .map((music, index) =>
                        <Music key={`songId_${index}`} music={music} />
                    )
            }
        </>
    )
}

export default Queue;