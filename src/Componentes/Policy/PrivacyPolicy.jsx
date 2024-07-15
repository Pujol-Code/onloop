import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
          Cras venenatis euismod malesuada. Nullam ac erat ante. Praesent ultricies quam a massa imperdiet, ut vulputate 
          purus lacinia. Aenean imperdiet purus quis metus venenatis, id efficitur ipsum pharetra. Maecenas dictum, erat 
          eu tempus vestibulum, dui velit vehicula neque, eget elementum justo urna nec elit. Sed ac egestas sem.
        </Typography>
        <Typography variant="body1" paragraph>
          Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis. Vestibulum 
          fermentum dignissim turpis, ut aliquet orci ultricies in. Suspendisse potenti. Nunc feugiat mi a tellus consequat 
          imperdiet. Praesent euismod ante a malesuada ultrices. Maecenas sit amet turpis venenatis, euismod mauris sed, 
          gravida turpis. Pellentesque at aliquam lorem.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
