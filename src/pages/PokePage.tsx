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
                    <img
                      src={
                        item.type.name === 'flying'
                          ? './public/assets/fly.png'
                          : item.type.name === 'dark'
                            ? './public/assets/dark.png'
                            : item.type.name === 'dragon'
                              ? './public/assets/dragon.png'
                              : item.type.name === 'earth'
                                ? './public/assets/earth.png'
                                : item.type.name === 'fairy'
                                  ? './public/assets/fairy.png'
                                  : item.type.name === 'figther'
                                    ? './public/assets/figther.png'
                                    : item.type.name === 'fire'
                                      ? './public/assets/fire.png'
                                      : item.type.name === 'ghost'
                                        ? './public/assets/ghost.png'
                                        : item.type.name === 'grass'
                                          ? './public/assets/grass.png'
                                          : item.type.name === 'ice'
                                            ? './public/assets/ice.png'
                                            : item.type.name === 'normal'
                                              ? './public/assets/normal.png'
                                              : item.type.name === 'psyc'
                                                ? './public/assets/psyc.png'
                                                : item.type.name === 'rock'
                                                  ? './public/assets/rock.png'
                                                  : item.type.name === 'steel'
                                                    ? './public/assets/steel.png'
                                                    : item.type.name === 'thunder'
                                                      ? './public/assets/thunder.png'
                                                      : item.type.name === 'water'
                                                        ? './public/assets/water.png'
                                                        : item.type.name === 'ground'
                                                          ? './public/assets/ground.png'
                                                          : item.type.name === 'poison'
                                                            ? './public/assets/poison.png'
                                                            : undefined
                      }
                    />
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              {selector?.poke.stats.map(item => (
                <div key={item.stat.name} className="flex flex-col w-full justify-center items-center">
                  <img
                    className="w-10 h-10"
                    src={
                      item.stat.name === 'hp'
                        ? './public/assets/heart.png'
                        : item.stat.name === 'attack'
                          ? './public/assets/x-attack.png'
                          : item.stat.name === 'defense'
                            ? './public/assets/x-defense.png'
                            : item.stat.name === 'special-attack'
                              ? './public/assets/x-sp-atk.png'
                              : item.stat.name === 'special-defense'
                                ? './public/assets/x-sp-def.png'
                                : item.stat.name === 'speed'
                                  ? './public/assets/x-speed.png'
                                  : undefined
                    }
                  />
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
