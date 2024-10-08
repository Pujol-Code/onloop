import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import IsotipoOnLoop from '../Image/Footer/ONLOOP_ISOTIPO.svg';
import FacebookLogo from '../Image/Footer/facebook.svg';
import InstagramLogo from '../Image/Footer/instagram.svg';
import MercadoPagoLogo from '../Image/Footer/mercadopago.svg';
import TarjetaLogo from '../Image/Footer/tarjeta.svg';
import VisaLogo from '../Image/Footer/visa.svg';

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box mt={5} py={3} px={2} bgcolor="#333" color="white" boxShadow={2}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={3} textAlign={isSmallScreen ? 'center' : 'left'}>
          <Box mb={isSmallScreen ? 2 : 0} mx={isSmallScreen ? 0 : 8}>
            <img src={IsotipoOnLoop} alt="OnLoop Logo" height="100" />
          </Box>
          <Box mt={2} textAlign={isSmallScreen ? 'center' : 'left'} mx={isSmallScreen ? 0 : 12}>
            <img src={FacebookLogo} alt="Facebook" height="40" style={{ marginRight: '8px' }} />
            <img src={InstagramLogo} alt="Instagram" height="40" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom className="typography-outfit-bold" sx={{ mt: isSmallScreen ? 2 : 0 }}>
            Información
          </Typography>
          <Typography variant="body2" className="typography-manjari">
            Central Gonzalo Pérez Llona <br/>
            Maipu, Región Metropolitana
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} textAlign="center">
          <Typography variant="h6" gutterBottom className="typography-outfit-bold" sx={{ mt: isSmallScreen ? 2 : 0 }}>
            Contáctanos
          </Typography>
          <Typography variant="body2" className="typography-manjari">
            ventas@onloop.cl<br />
            compras@onloop.cl<br />
            +56987654321<br />
            +56912345678
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} textAlign={isSmallScreen ? 'center' : 'right'}>
          <Box mx={isSmallScreen ? 0 : 8}>
            <Typography variant="h6" gutterBottom className="typography-outfit-bold" sx={{ mt: isSmallScreen ? 2 : 0 }}>
              Medios de Pago
            </Typography>
            <Box display="flex" justifyContent={isSmallScreen ? 'center' : 'flex-end'} mb={2}>
              <Box mx={1}>
                <img src={TarjetaLogo} alt="Tarjeta" height="50" />
              </Box>
              <Box mx={1}>
                <img src={VisaLogo} alt="Visa" height="50" />
              </Box>
              <Box mx={1}>
                <img src={MercadoPagoLogo} alt="Mercado Pago" height="50" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" mt={3} textAlign="center">
        © 2024 OnLoop. All rights reserved.
        {isSmallScreen ? (
          <>
            <br />
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            {' | '}
            <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </>
        ) : (
          <span style={{ marginLeft: '16px' }}>
            <Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            {' | '}
            <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </span>
        )}
      </Typography>
      {!isSmallScreen && (
        <Typography variant="body2" style={{ marginTop: '8px' }} textAlign="center">
          Made with ❤️ by OnLoop
        </Typography>
      )}
    </Box>
  );
};

export default Footer;
