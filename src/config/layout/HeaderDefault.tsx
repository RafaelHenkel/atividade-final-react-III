import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

function ResponsiveAppBar() {
  return (
    <AppBar position="static" color="error">
      <Container maxWidth="xl" className="flex justify-center w-full py-5">
        <img src="/pokelogo.png" alt="logo pokemon" width="250px" />
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
