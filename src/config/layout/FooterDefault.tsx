import { Box } from '@mui/material';
import { Typography } from '@mui/material';

function FooterDefault() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#D32F2F',
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
