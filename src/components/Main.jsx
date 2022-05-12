import {
    Header,
    AddMusic,
    MusicList,
    Player
} from "../components";
import { Grid, useMediaQuery } from "@mui/material";


const App = () => {

    const telaGrande = useMediaQuery('(min-width:900px)');


    return (
        <>
            <Header />
            <Grid container pt={10} >

                <Grid md={7} xs={12} sx={{ p: 1 }}>
                    <AddMusic />
                    <MusicList />
                </Grid>

                <Grid
                    style={
                        telaGrande ?
                            { position: 'fixed', width: '100%', right: 10, top: 80 }
                            :
                            { position: 'fixed', width: '100%', left: 0, bottom: 10 }
                    }
                    md={5} xs={12} sx={{ p: 1 }}>
                    <Player telaGrande={telaGrande} />
                </Grid>

            </Grid>
        </>
    );
}

export default App;
