import { IconButton } from '@mui/material';
import PageDefault from '../config/layout/PageDefault';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Grid2 as Grid } from '@mui/material';
import PokeCard from '../components/PokeCard';
import { Paper } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export function Home() {
  function handleNext() {
    console.log('Next');
  }
  function handlePrev() {
    console.log('Prev');
  }
  return (
    <>
      <PageDefault>
        <Grid container spacing={2} paddingY="15px">
          <Grid size={12} display="flex" justifyContent="center">
            <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '50%' }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Pesquisar pokemon"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Paper>
          </Grid>
          <Grid size={3}>
            <PokeCard />
          </Grid>
          <Grid size={12} display="flex" justifyContent="center">
            <IconButton onClick={handlePrev}>
              <ArrowBack fontSize="large" />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForward fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </PageDefault>
    </>
  );
}
