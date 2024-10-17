import { useNavigate, useParams } from 'react-router-dom';
import PageDefault from '../config/layout/PageDefault';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Box, Button, Chip, Grid2 as Grid, Typography } from '@mui/material';
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

  const getColorByType = (type: string) => {
    switch (type) {
      case 'bug':
        return '#76a866';
      case 'dark':
        return '#60596b';
      case 'dragon':
        return '#7038f8';
      case 'electric':
        return '#f9be00';
      case 'fairy':
        return '#f469a9';
      case 'fighting':
        return '#c03028';
      case 'fire':
        return '#f08030';
      case 'flying':
        return '#768fd1';
      case 'ghost':
        return '#735797';
      case 'grass':
        return '#48d0b0';
      case 'ground':
        return '#f2cd5a';
      case 'ice':
        return '#77d2f7';
      case 'normal':
        return '#5c5c5c';
      case 'poison':
        return '#a040a0';
      case 'psychic':
        return '#f542bd';
      case 'rock':
        return '#bcac66';
      case 'steel':
        return '#b8b8d0';
      case 'water':
        return '#457af7';
      default:
        return 'gray';
    }
  };

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
              <Typography color="white" variant="h3">
                {selector?.poke.name}
              </Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography color="white" variant="subtitle1">
                ID: {selector?.poke.id}
              </Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography color="white" variant="subtitle1">
                Altura: {selector?.poke.height} Metros
              </Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography color="white" variant="subtitle1">
                Habilidades:
              </Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <ul className="flex flex-col items-center justify-center">
                {selector?.poke.abilities.map(item => (
                  <Typography color="white" component="li" key={item.ability.name}>
                    {item.ability.name}
                  </Typography>
                ))}
              </ul>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography color="white" variant="subtitle1">
                Tipo:&nbsp;
              </Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              {selector?.poke.types.map(item => (
                <Chip
                  key={item.type.name}
                  label={item.type.name}
                  sx={{ bgcolor: getColorByType(item.type.name) }}
                  style={{ color: 'white', marginBottom: '0.5rem' }}
                />
              ))}
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              {selector?.poke.stats.map(item => (
                <div key={item.stat.name} className="flex flex-col w-full justify-center items-center">
                  <Typography color="white" variant="subtitle1">
                    {item.stat.name}
                  </Typography>
                  <Typography color="white" variant="subtitle2">
                    {item.base_stat}
                  </Typography>
                </div>
              ))}
            </Grid>
          </Grid>
        </Box>
      </PageDefault>
    </>
  );
}
