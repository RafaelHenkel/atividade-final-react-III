import { alpha, Box, Button, CircularProgress, IconButton, styled } from '@mui/material';
import PageDefault from '../config/layout/PageDefault';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Grid2 as Grid } from '@mui/material';
import PokeCard from '../components/PokeCard';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useState } from 'react';
import { getPokemon, pokeOffset } from '../store/models/PokeSlice';
import { getSearchPokemon } from '../store/models/PokeSearchSlice';
import { Link } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export function Home() {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const pokeSelector = useAppSelector(state => state.pokemons);
  const dispachSearch = useAppDispatch();
  const pokeSearchSelector = useAppSelector(state => state.pokeSearch);

  useEffect(() => {
    document.title = `PokéDev`;

    dispatch(getPokemon(pokeSelector.offset));
  }, [dispatch, pokeSelector.offset]);

  useEffect(() => {
    dispachSearch(getSearchPokemon(search));
  }, [search]);

  function handleNext() {
    dispatch(pokeOffset(pokeSelector.offset + 20));
    console.log(pokeSelector.offset);

    console.log('Next');
  }

  function handlePrev() {
    if (pokeSelector.offset === 0) {
      return;
    }
    console.log(pokeSelector.offset);

    dispatch(pokeOffset(pokeSelector.offset - 20));

    console.log('Prev');
  }

  return (
    <>
      <PageDefault>
        <Grid container spacing={2} paddingY="15px">
          <Grid size={12} display="flex" justifyContent="center" alignItems="center">
            <IconButton onClick={handlePrev}>
              <ArrowBack fontSize="large" sx={{ color: '#fff' }} />
            </IconButton>
            <Search sx={{ color: 'white !important', bgcolor: '#ffffff30 !important' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Procurar…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </Search>
            <IconButton onClick={handleNext}>
              <ArrowForward fontSize="large" sx={{ color: '#fff' }} />
            </IconButton>
          </Grid>
          <Grid size={12} display="flex" justifyContent="center" alignItems="center">
            <Link to="/pokedex">
              <Button variant="contained" size="small">
                Pokedex
              </Button>
            </Link>
          </Grid>
          {search.length > 2 ? (
            pokeSearchSelector.loading ? (
              <Box width="100%" height="50%" display="flex" justifyContent="center">
                <CircularProgress />
              </Box>
            ) : (
              pokeSearchSelector.poke.map(poke => (
                <Grid size={3} key={poke.id}>
                  <PokeCard poke={poke} />
                </Grid>
              ))
            )
          ) : pokeSelector.loading ? (
            <Box width="100%" height="50%" display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            pokeSelector.poke.map(poke => (
              <Grid size={3} key={poke.id}>
                <PokeCard poke={poke} />
              </Grid>
            ))
          )}

          <Grid size={12} display="flex" justifyContent="center" alignItems="center">
            <IconButton onClick={handlePrev}>
              <ArrowBack fontSize="large" sx={{ color: '#fff' }} />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForward fontSize="large" sx={{ color: '#fff' }} />
            </IconButton>
          </Grid>
        </Grid>
      </PageDefault>
    </>
  );
}
