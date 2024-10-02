import { IconButton } from '@mui/material';
import PageDefault from '../config/layout/PageDefault';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Grid2 as Grid } from '@mui/material';
import PokeCard from '../components/PokeCard';

function Home() {
  return (
    <>
      <PageDefault>
        <Grid container spacing={2} paddingY="15px">
          <Grid size={3}>
            <PokeCard />
          </Grid>
          <Grid size={12} display="flex" justifyContent="center">
            <IconButton>
              <ArrowBack fontSize="large" />
            </IconButton>
            <IconButton>
              <ArrowForward fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </PageDefault>
    </>
  );
}

export default Home;
