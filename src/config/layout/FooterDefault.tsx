import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function FooterDefault() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#1976D2',
          width: '100%',
          minHeight: '10vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" fontWeight="600">
          Rafael Henkel
        </Typography>
      </Box>
    </>
  );
}

export default FooterDefault;
