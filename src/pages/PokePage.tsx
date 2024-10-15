import { useNavigate, useParams } from 'react-router-dom';
import PageDefault from '../config/layout/PageDefault';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Box, Button, Grid2 as Grid, Typography } from '@mui/material';
import { likedPoke } from '../store/models/PokeLikesSlice';

export function PokePage() {
  const { name } = useParams();
  const selector = useAppSelector(state => state.pokePage);
  const dispach = useAppDispatch();
  const navitage = useNavigate();
  const likeSelector = useAppSelector(state => state.likes);
  const alreadyLiked = likeSelector.poke.find(item => item.id === selector.poke.id);

  useEffect(() => {
    if (!name) {
      return;
    }
    document.title = `PokéDev - ${name}`;
  }, [name, selector]);

  function handleLike() {
    dispach(likedPoke(selector.poke));
  }

  return (
    <>
      <PageDefault>
        <Box>
          <Grid container spacing={1}>
            <Grid size={12}>
              <Button variant="contained" size="small" onClick={() => navitage(-1)}>
                Voltar
              </Button>
            </Grid>
            <Grid size={12}>
              <Button
                size="small"
                variant="contained"
                onClick={() => handleLike()}
                color={alreadyLiked ? 'error' : 'inherit'}
              >
                {likeSelector && likeSelector.poke && alreadyLiked ? 'Descurtir' : 'Curtir'}
              </Button>
            </Grid>
            <Grid size={6} display="flex" justifyContent="end" alignItems="center">
              <img src={selector?.poke.sprites.front_default} alt={selector?.poke.name} />
            </Grid>
            <Grid size={6} display="flex" justifyContent="start" alignItems="center">
              <img src={selector?.poke.sprites.back_default} alt={selector?.poke.name} />
            </Grid>
            <Grid size={6} display="flex" justifyContent="end" alignItems="center">
              <img src={selector?.poke.sprites.front_shiny} alt={selector?.poke.name} />
            </Grid>
            <Grid size={6} display="flex" justifyContent="start" alignItems="center">
              <img src={selector?.poke.sprites.back_shiny} alt={selector?.poke.name} />
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h3">{selector?.poke.name}</Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1">ID: {selector?.poke.id}</Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1">Altura: {selector?.poke.height} Metros</Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1">Habilidades:</Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <ul className="flex flex-col items-center justify-center">
                {selector?.poke.abilities.map(item => <li key={item.ability.name}>{item.ability.name}</li>)}
              </ul>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1">Tipo:&nbsp;</Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <ul className="flex flex-col items-center justify-center">
                {selector?.poke.types.map(item => (
                  <li key={item.type.name} className="flex justify-center items-center gap-2">
                    {item.type.name}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              {selector?.poke.stats.map(item => (
                <div key={item.stat.name} className="flex flex-col w-full justify-center items-center">
                  <Typography variant="subtitle1">{item.stat.name}</Typography>
                  <Typography variant="subtitle2">{item.base_stat}</Typography>
                </div>
              ))}
            </Grid>
          </Grid>
        </Box>
      </PageDefault>
    </>
  );
}
