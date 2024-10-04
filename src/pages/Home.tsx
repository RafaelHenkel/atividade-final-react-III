import { alpha, Box, CircularProgress, IconButton, styled } from '@mui/material';
import PageDefault from '../config/layout/PageDefault';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Grid2 as Grid } from '@mui/material';
import PokeCard from '../components/PokeCard';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getPokemon, pokeOffset } from '../store/models/PokeSlice';

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
    // vertical padding + font size from searchIcon
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
  const dispatch = useAppDispatch();
  const pokeSelector = useAppSelector(state => state.pokemons);

  useEffect(() => {
    document.title = `PokéDev`;

    dispatch(getPokemon(pokeSelector.offset));
  }, [dispatch, pokeSelector.offset]);

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
              <ArrowBack fontSize="large" />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <IconButton onClick={handleNext}>
              <ArrowForward fontSize="large" />
            </IconButton>
          </Grid>
          {pokeSelector.loading ? (
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
        </Grid>
      </PageDefault>
    </>
  );
}
