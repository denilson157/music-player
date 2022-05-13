import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'
import { SubscriptionsTwoTone } from '@mui/icons-material';
import { Box } from '@mui/system';
import YoutubePlayer from 'react-player/youtube'
import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { INSERT_SONG } from '../graphql/song/mutation';
import { useMutation } from '@apollo/client'

const initialValuesSong = {
    id: '',
    title: '',
    artist: '',
    thumbnail: "",
    url: '',
    duration: 0,
    created_at: new Date()
}

const AddMusic = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [song, setSong] = useState({ ...initialValuesSong });
    const [url, setUrl] = useState('');
    const [blockButton, setBlockButton] = useState(true);

    const [insertSong] = useMutation(INSERT_SONG);


    const handleDialog = () => setOpenDialog(prev => !prev)

    useEffect(() => {
        setBlockButton(!YoutubePlayer.canPlay(url));
    }, [url])

    const handleMusicEdit = ({ player }) => {
        if (!blockButton) {
            const realPlayer = player.player.player

            const { author, video_id, title } = realPlayer.getVideoData()

            const newSong = {
                artist: author,
                title,
                duration: realPlayer.getDuration(),
                thumbnail: `http://img.youtube.com/vi/${video_id}/maxresdefault.jpg`,
                url
            }

            setSong(newSong);
        }
    }

    const changePropSong = (event) => {

        const { name, value } = event.target

        setSong(prevSong => ({
            ...prevSong,
            [name]: value
        }))

    }

    const saveSong = async () => {
        const { duration, title, artist, url, thumbnail } = song
        
        try {

            await insertSong({
                variables: {

                    duration: duration > 0 ? duration : null,
                    title: checkLength(title) ? title : null,
                    artist: checkLength(artist) ? artist : null,
                    url: checkLength(url) ? url : null,
                    thumbnail: checkLength(thumbnail) ? thumbnail : null
                }
            })

            handleDialog();
            setSong({ ...initialValuesSong })
            setUrl('')
        }
        catch (e) {
            alert("Errrroooooo. Olha o console rei")
            console.log(e)
        }



    }

    const checkLength = (value) => value.length > 0

    return (
        <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField
                variant="outlined"
                placeholder="URL"
                fullWidth
                label="URL da música"
                type="url"
                sx={{ mr: 3 }}
                onChange={(e) => setUrl(e.target.value)}
                value={url}
            />
            <Button
                type="button"
                variant="contained"
                onClick={handleDialog}
                startIcon={<SubscriptionsTwoTone />}
                disabled={blockButton}
            >
                Adicionar
            </Button>

            <ReactPlayer url={url} hidden onReady={handleMusicEdit} />

            <Dialog open={openDialog}>
                <DialogTitle>
                    Editar Música
                </DialogTitle>

                <DialogContent>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>

                        <img style={{ width: '70%' }} src={song.thumbnail} alt="album bk" />

                    </div>

                    <TextField
                        sx={{ mt: 1 }}
                        label="Nome da música"
                        type="text"
                        fullWidth
                        value={song.title}
                        name="title"
                        onChange={(e) => changePropSong(e)}
                    />
                    <TextField
                        sx={{ mt: 1 }}
                        label="Nome do artista"
                        type="text"
                        fullWidth
                        value={song.author}
                        name="artist"
                        onChange={(e) => changePropSong(e)}
                    />
                    <TextField
                        sx={{ mt: 1 }}
                        label="Nome do Imagem"
                        type="text"
                        fullWidth
                        value={song.thumbnail}
                        name="thumbnail"
                        onChange={(e) => changePropSong(e)}
                    />

                </DialogContent>

                <DialogActions>
                    <Button
                        type="button"
                        variant="contained"
                        color="secondary"
                        onClick={handleDialog}>
                        Cancelar
                    </Button>
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        onClick={saveSong}
                    >
                        Salvar
                    </Button>
                </DialogActions>

            </Dialog>


        </Box>
    )
}

export default AddMusic;