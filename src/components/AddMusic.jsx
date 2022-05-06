import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react'
import { SubscriptionsTwoTone } from '@mui/icons-material';
import { Box } from '@mui/system';

const AddMusic = () => {

    const [openDialog, setOpenDialog] = useState(false);

    const handleDialog = () => setOpenDialog(!openDialog)



    return (
        <Box sx={{ display: 'flex', mt: 2 }}>
            <TextField variant="outlined" placeholder="URL" fullWidth label="URL da música" type="url" sx={{ mr: 3 }} />
            <Button type="button" variant="contained" onClick={handleDialog} startIcon={<SubscriptionsTwoTone />}>Adicionar</Button>


            <Dialog open={openDialog}>
                <DialogTitle>
                    Editar Música
                </DialogTitle>

                <DialogContent>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>

                        <img style={{ width: '70%' }} src="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/b/1/0/6/671611541442093.jpg" alt="album bk" />

                    </div>

                    <TextField
                        sx={{ mt: 1 }}
                        label="Nome da música"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        sx={{ mt: 1 }}
                        label="Nome do artista"
                        type="text"
                        fullWidth
                    />
                    <TextField sx={{ mt: 1 }} label="Nome do Imagem" type="text" fullWidth />

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
                        color="primary">
                        Salvar
                    </Button>
                </DialogActions>

            </Dialog>


        </Box>
    )
}

export default AddMusic;