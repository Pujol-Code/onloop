import React from 'react';
import { Box, TextField, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel, Typography, Grid } from '@mui/material';

const SearchBar = ({
  searchText,
  setSearchText,
  sortOption,
  setSortOption,
  selectedBrands,
  handleBrandChange,
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  const brands = ["Prolockers", "Milockers", "Prosilla", "Starimport", "Starpet"];

  return (
    <Box sx={{ margin: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Buscar Productos"
            placeholder="Buscar..."
            variant="outlined"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Ordenar por</InputLabel>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              label="Ordenar por"
              sx={{ marginBottom: '1rem' }}
            >
              <MenuItem value="default">Seleccione</MenuItem>
              <MenuItem value="titleAsc">Nombre (A-Z)</MenuItem>
              <MenuItem value="titleDesc">Nombre (Z-A)</MenuItem>
              <MenuItem value="priceAsc">Precio (menor a mayor)</MenuItem>
              <MenuItem value="priceDesc">Precio (mayor a menor)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Categoría</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Categoría"
              sx={{ marginBottom: '1rem' }}
            >
              <MenuItem value="">Seleccione</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" component="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
            Filtrar por Marca
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {brands.map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                    value={brand}
                  />
                }
                label={brand}
                sx={{ marginRight: '1rem', marginBottom: '0.5rem' }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
