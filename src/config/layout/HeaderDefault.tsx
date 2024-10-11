import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  return (
    <AppBar position="static" color="error">
      <Container maxWidth="xl" className="flex justify-center w-full py-5">
        <Link to="/">
          <img src="/pokelogo.png" alt="logo pokemon" width="250px" />
        </Link>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
