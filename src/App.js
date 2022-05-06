import {
  Header,
  AddMusic,
  MusicList,
  Player
} from "./components";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import { Grid } from "@mui/material";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Grid container pt={10} >

        <Grid md={7} xs={12} sx={{ p: 1 }}>
          <AddMusic />
          <MusicList />
        </Grid>

        <Grid md={5} xs={12} sx={{ p: 1 }}>
          <Player />
        </Grid>

      </Grid>
    </ThemeProvider>
  );
}

export default App;
