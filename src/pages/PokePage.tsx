import { useParams } from 'react-router-dom';
import PageDefault from '../config/layout/PageDefault';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { PokeDefaultType } from '../types/PokeType';
import { getPokemon } from '../store/models/PokeSlice';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function PokePage() {
  const { name } = useParams();
  console.log(name);

  const selector = useAppSelector(state => state.pokemons);
  const dispatch = useAppDispatch();
  const [poke, setPoke] = useState<PokeDefaultType>();

  useEffect(() => {
    dispatch(getPokemon());
    console.log(poke);
  }, []);

  useEffect(() => {
    if (!name) {
      return;
    }
    const pokeFind = selector.poke.find(item => item.name === name);

    setPoke(pokeFind);

    document.title = `PokeDev - ${poke?.name}`;
  }, [name, poke, selector.poke]);

  return (
    <>
      <PageDefault>
        {selector.loading ? (
          <p>Carregando...</p>
        ) : (
          <Box>
            <h1>{poke?.name}</h1>
            <p>{poke?.id}</p>
            <p>{poke?.height}</p>
            <p>Habilidades:</p>
            <ul>{poke?.abilities.map(item => <li key={item.ability.name}>{item.ability.name}</li>)}</ul>
            <p>status:</p>
            <ul>
              {poke?.stats.map(item => (
                <div key={item.stat.name}>
                  <li>{item.stat.name}</li>
                  <li>{item.base_stat}</li>
                </div>
              ))}
            </ul>

            <img src={poke?.sprites.front_default} alt={poke?.name} />
            <img src={poke?.sprites.back_default} alt={poke?.name} />
            <img src={poke?.sprites.front_shiny} alt={poke?.name} />
            <img src={poke?.sprites.back_shiny} alt={poke?.name} />
            <Link to="/">
              <Button>Voltar</Button>
            </Link>
          </Box>
        )}
      </PageDefault>
    </>
  );
}
