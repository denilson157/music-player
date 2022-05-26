import {
    Header,
    AddMusic,
    MusicList,
    Player
} from "../components";
import { Grid, useMediaQuery } from "@mui/material";

import { createContext, useContext } from 'react'
import { useReducer } from "react";
import { QueueReducer, SongReducer } from "../reducer";


export const SongContext = createContext({
    song: {
        id: 'cddac4c1-851b-41d5-9c1f-b47837240937',
        title: 'Salve',
        artist: 'Tasha e Tracie',
        author: '',
        thumbnail: 'https://images.genius.com/8a31646f4ccc3b160c23966d7259d50b.1000x1000x1.png',
        url: 'https://www.youtube.com/watch?v=pA6OflrhYsw',
        duration: 3
    },
    isPlaying: false
})

const App = () => {

    const telaGrande = useMediaQuery('(min-width:900px)');
    const initialSong = useContext(SongContext)

    const [currentQueue, queueDispatch] = useReducer(QueueReducer, [])
    const [currentSong, songDispatch] = useReducer(SongReducer, initialSong)

    return (
        <SongContext.Provider value={initialSong}>
            <Header />
            <Grid container pt={10} >

                <Grid md={7} xs={12} sx={{ p: 1 }}>
                    <AddMusic />
                    <MusicList queue={{ currentQueue, queueDispatch }} />
                </Grid>

                <Grid
                    style={
                        telaGrande ?
                            { position: 'fixed', width: '100%', right: 10, top: 80 }
                            :
                            { position: 'fixed', width: '100%', left: 0, bottom: 10 }
                    }
                    md={5}
                    xs={12}
                    sx={{ p: 1 }}
                >
                    <Player queue={{ currentQueue, queueDispatch }} telaGrande={telaGrande} />
                </Grid>

            </Grid>
        </SongContext.Provider>
    );
}

export default App;
