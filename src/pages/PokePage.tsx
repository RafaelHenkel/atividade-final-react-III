import { useNavigate, useParams } from 'react-router-dom';
import PageDefault from '../config/layout/PageDefault';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Box, Button, Grid2 as Grid, Typography } from '@mui/material';
import { likedPoke } from '../store/models/PokeLikesSlice';
import flyImage from './public/fly.png';
import darkImage from './public/dark.png';
import dragonImage from './public/dragon.png';
import earthImage from './public/earth.png';
import fairyImage from './public/fairy.png';
import figtherImage from './public/figther.png';
import fireImage from './public/fire.png';
import ghostImage from './public/ghost.png';
import grassImage from './public/grass.png';
import iceImage from './public/ice.png';
import normalImage from './public/normal.png';
import psycImage from './public/psyc.png';
import rockImage from './public/rock.png';
import steelImage from './public/steel.png';
import thunderImage from './public/thunder.png';
import waterImage from './public/water.png';
import groundImage from './public/ground.png';
import poisonImage from './public/poison.png';

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
                          ? flyImage
                          : item.type.name === 'dark'
                            ? darkImage
                            : item.type.name === 'dragon'
                              ? dragonImage
                              : item.type.name === 'earth'
                                ? earthImage
                                : item.type.name === 'fairy'
                                  ? fairyImage
                                  : item.type.name === 'figther'
                                    ? figtherImage
                                    : item.type.name === 'fire'
                                      ? fireImage
                                      : item.type.name === 'ghost'
                                        ? ghostImage
                                        : item.type.name === 'grass'
                                          ? grassImage
                                          : item.type.name === 'ice'
                                            ? iceImage
                                            : item.type.name === 'normal'
                                              ? normalImage
                                              : item.type.name === 'psyc'
                                                ? psycImage
                                                : item.type.name === 'rock'
                                                  ? rockImage
                                                  : item.type.name === 'steel'
                                                    ? steelImage
                                                    : item.type.name === 'thunder'
                                                      ? thunderImage
                                                      : item.type.name === 'water'
                                                        ? waterImage
                                                        : item.type.name === 'ground'
                                                          ? groundImage
                                                          : item.type.name === 'poison'
                                                            ? poisonImage
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
                        ? './public/heart.png'
                        : item.stat.name === 'attack'
                          ? './public/x-attack.png'
                          : item.stat.name === 'defense'
                            ? './public/x-defense.png'
                            : item.stat.name === 'special-attack'
                              ? './public/x-sp-atk.png'
                              : item.stat.name === 'special-defense'
                                ? './public/x-sp-def.png'
                                : item.stat.name === 'speed'
                                  ? './public/x-speed.png'
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
