import React, { useState } from 'react';
import { Box, TextField, Autocomplete } from '@mui/material';
import { Link } from 'react-router-dom';
import productsData from '../../Data/data.json';

const BuscarInicio = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={2}>
      <Autocomplete
        freeSolo
        options={productsData}
        getOptionLabel={(option) => option.titulo}
        onChange={(event, newValue) => setSelectedProduct(newValue)}
        renderInput={(params) => <TextField {...params} label="Buscar producto" />}
        sx={{ width: 300, marginBottom: 2 }}
        renderOption={(props, option) => (
          <li {...props}>
            <Link to={`/item/${option.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {option.titulo}
            </Link>
          </li>
        )}
      />
    </Box>
  );
};

export default BuscarInicio;
