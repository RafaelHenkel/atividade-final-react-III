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
import { likedPoke } from '../store/models/PokeLikes';

interface PokeCardProps {
  poke: PokeDefaultType;
}

export default function PokeCard({ poke }: PokeCardProps) {
  const dispach = useAppDispatch();
  const likeSelector = useAppSelector(state => state.likes);

  function handleLike() {
    console.log(poke);

    dispach(likedPoke(poke));
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={poke.name}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={poke.sprites.other['official-artwork'].front_default}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {poke.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" onClick={() => handleLike()} color="inherit">
          {likeSelector && likeSelector.poke && likeSelector.poke.find(item => item.id === poke.id)
            ? 'Descurtir'
            : 'Curtir'}
        </Button>
      </CardActions>
    </Card>
  );
}
