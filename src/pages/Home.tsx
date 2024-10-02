import { IconButton } from '@mui/material';
import PageDefault from '../config/layout/PageDefault';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Grid2 as Grid } from '@mui/material';
import PokeCard from '../components/PokeCard';

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
