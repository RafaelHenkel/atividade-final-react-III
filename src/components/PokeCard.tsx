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

  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button
          sx={{ marginY: '6px' }}
          size="small"
          onClick={() => handleLike()}
          variant="contained"
          color={likeSelector.poke.find(item => item.id === poke.id) ? 'error' : 'inherit'}
        >
          {likeSelector && likeSelector.poke && likeSelector.poke.find(item => item.id === poke.id)
            ? 'Descurtir'
            : 'Curtir'}
        </Button>
      </CardActions>
    </Card>
  );
}
