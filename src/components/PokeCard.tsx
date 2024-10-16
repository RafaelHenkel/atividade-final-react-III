import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { PokeDefaultType } from '../types/PokeType';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { likedPoke } from '../store/models/PokeLikesSlice';
import { addPokemonPage } from '../store/models/PokePageSlice';

interface PokeCardProps {
  poke: PokeDefaultType;
  height?: string;
}

export default function PokeCard({ poke, height }: PokeCardProps) {
  const dispach = useAppDispatch();
  const likeSelector = useAppSelector(state => state.likes);

  function handleLike() {
    dispach(likedPoke(poke));
  }

  function handleSave() {
    dispach(addPokemonPage(poke));
  }

  const pokeColor =
    poke.types[0].type.name === 'bug'
      ? '#76a866'
      : poke.types[0].type.name === 'dark'
        ? '#60596b'
        : poke.types[0].type.name === 'dragon'
          ? '#7038f8'
          : poke.types[0].type.name === 'electric'
            ? '#f9be00'
            : poke.types[0].type.name === 'fairy'
              ? '#f469a9'
              : poke.types[0].type.name === 'fighting'
                ? '#c03028'
                : poke.types[0].type.name === 'fire'
                  ? '#f08030'
                  : poke.types[0].type.name === 'flying'
                    ? '#768fd1'
                    : poke.types[0].type.name === 'ghost'
                      ? '#735797'
                      : poke.types[0].type.name === 'grass'
                        ? '#48d0b0'
                        : poke.types[0].type.name === 'ground'
                          ? '#f2cd5a'
                          : poke.types[0].type.name === 'ice'
                            ? '#77d2f7'
                            : poke.types[0].type.name === 'normal'
                              ? '#5c5c5c'
                              : poke.types[0].type.name === 'poison'
                                ? '#a040a0'
                                : poke.types[0].type.name === 'psychic'
                                  ? '#f542bd'
                                  : poke.types[0].type.name === 'rock'
                                    ? '#bcac66'
                                    : poke.types[0].type.name === 'steel'
                                      ? '#b8b8d0'
                                      : poke.types[0].type.name === 'water'
                                        ? '#457af7'
                                        : '#ffff';

  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: pokeColor,
        boxShadow: `${pokeColor} 0px 2px 8px;`,
        ':hover': {
          boxShadow: `${pokeColor} 0px 0px 18px;`,
        },
      }}
    >
      <Link to={`/${poke.name}`} onClick={handleSave}>
        <CardActionArea sx={{ height: height || '350px', maxHeight: height || '350px', width: '100%' }}>
          <CardMedia component="img" image={poke.sprites.other['official-artwork'].front_default} alt={poke.name} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {poke.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button sx={{ marginY: '6px' }} size="small" onClick={() => handleLike()} variant="contained" color="inherit">
          {likeSelector && likeSelector.poke && likeSelector.poke.find(item => item.id === poke.id)
            ? 'Descurtir'
            : 'Curtir'}
        </Button>
      </CardActions>
    </Card>
  );
}
