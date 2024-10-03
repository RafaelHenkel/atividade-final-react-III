import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { PokeDefaultType } from '../types/PokeType';
import { CardMedia } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

interface PokeCardProps {
  poke: PokeDefaultType;
}
export default function PokeCard({ poke }: PokeCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={poke.name}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={poke.sprites.front_default} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {poke.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="inherit">
          <FavoriteIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
