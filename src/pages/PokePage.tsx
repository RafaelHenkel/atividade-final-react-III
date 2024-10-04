import { useParams } from 'react-router-dom';
import PageDefault from '../config/layout/PageDefault';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { PokeDefaultType } from '../types/PokeType';
import { getPokemon } from '../store/models/PokeSlice';
import { Box, Button, CircularProgress, Grid2 as Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function PokePage() {
  const { name } = useParams();

  const selector = useAppSelector(state => state.pokemons);
  const dispatch = useAppDispatch();
  const [poke, setPoke] = useState<PokeDefaultType>();

  useEffect(() => {
    dispatch(getPokemon(selector.offset));
  }, [selector.offset, dispatch]);

  useEffect(() => {
    if (!name) {
      return;
    }
    const pokeFind = selector.poke.find(item => item.name === name);

    setPoke(pokeFind);

    document.title = `PokéDev - ${poke?.name}`;
  }, [name, poke, selector.poke]);

  return (
    <>
      <PageDefault>
        {selector.loading ? (
          <Box width="100%" height="50%" display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Link to="/">
              <Button>Voltar</Button>
            </Link>
            <Grid container spacing={1}>
              <Grid size={6} display="flex" justifyContent="end" alignItems="center">
                <img src={poke?.sprites.front_default} alt={poke?.name} />
              </Grid>
              <Grid size={6} display="flex" justifyContent="start" alignItems="center">
                <img src={poke?.sprites.back_default} alt={poke?.name} />
              </Grid>
              <Grid size={6} display="flex" justifyContent="end" alignItems="center">
                <img src={poke?.sprites.front_shiny} alt={poke?.name} />
              </Grid>
              <Grid size={6} display="flex" justifyContent="start" alignItems="center">
                <img src={poke?.sprites.back_shiny} alt={poke?.name} />
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h3">{poke?.name}</Typography>
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="subtitle1">ID: {poke?.id}</Typography>
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="subtitle1">Altura: {poke?.height} Metros</Typography>
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="subtitle1">Habilidades:</Typography>
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                <ul className="flex flex-col items-center justify-center">
                  {poke?.abilities.map(item => <li key={item.ability.name}>{item.ability.name}</li>)}
                </ul>
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="subtitle1">Tipo:&nbsp;</Typography>
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                <ul className="flex flex-col items-center justify-center">
                  {poke?.types.map(item => <li key={item.type.name}> {item.type.name}</li>)}
                </ul>
              </Grid>
              <Grid size={12} display="flex" justifyContent="center" alignItems="center">
                {poke?.stats.map(item => (
                  <div key={item.stat.name} className="flex flex-col w-full justify-center items-center">
                    <img
                      className="w-10 h-10"
                      src={
                        item.stat.name === 'hp'
                          ? '/public/heart.png'
                          : item.stat.name === 'attack'
                            ? '/public/x-attack.png'
                            : item.stat.name === 'defense'
                              ? '/public/x-defense.png'
                              : item.stat.name === 'special-attack'
                                ? '/public/x-sp-atk.png'
                                : item.stat.name === 'special-defense'
                                  ? '/public/x-sp-def.png'
                                  : item.stat.name === 'speed'
                                    ? '/public/x-speed.png'
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
        )}
      </PageDefault>
    </>
  );
}
