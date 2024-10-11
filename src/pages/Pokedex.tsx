import { alpha, Box, Button, CircularProgress, styled, Typography } from '@mui/material';
import PageDefault from '../config/layout/PageDefault';
import { Grid2 as Grid } from '@mui/material';
import PokeCard from '../components/PokeCard';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect, useState } from 'react';
import { getSearchPokemon } from '../store/models/PokeSearchSlice';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

export function Pokedex() {
  const [search, setSearch] = useState<string>('');
  const [searchPokeAdd, setSearchPokeAdd] = useState<string>('');
  const selector = useAppSelector(state => state.likes);
  const pokeSearchSelector = useAppSelector(state => state.pokeSearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSearchPokemon(searchPokeAdd));
  }, [searchPokeAdd]);

  return (
    <>
      <PageDefault>
        <Grid container spacing={2} paddingY="15px" display="flex" alignItems="start">
          <Grid size={12} display="flex" justifyContent="center" alignItems="center">
            <Link to="/">
              <Button variant="contained" size="small">
                Home
              </Button>
            </Link>
          </Grid>
          <Grid container size={8} spacing={2} paddingY="15px">
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4">Pokedex</Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Search>
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
            </Grid>
            {selector.poke
              .filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
              .map(poke => (
                <Grid size={3} key={poke.id}>
                  <PokeCard poke={poke} height="250px" />
                </Grid>
              ))}
          </Grid>
          <Grid container size={4} spacing={2} paddingY="15px" display="flex" alignItems="start">
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Typography variant="h4">Adicionar Pokemons</Typography>
            </Grid>
            <Grid size={12} display="flex" justifyContent="center" alignItems="center">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Procurar…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchPokeAdd}
                  onChange={e => setSearchPokeAdd(e.target.value)}
                />
              </Search>
            </Grid>
            <Grid size={12}>
              {searchPokeAdd.length > 2 ? (
                pokeSearchSelector.loading ? (
                  <Box width="100%" height="50%" display="flex" justifyContent="center">
                    <CircularProgress />
                  </Box>
                ) : (
                  <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    style={{ paddingLeft: '1rem', paddingBottom: '1rem', height: '500px' }}
                  >
                    {pokeSearchSelector.poke.map(poke => (
                      <SwiperSlide>
                        <PokeCard poke={poke} height="400px" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )
              ) : (
                ''
              )}
            </Grid>
          </Grid>
        </Grid>
      </PageDefault>
    </>
  );
}
