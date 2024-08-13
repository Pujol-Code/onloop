import React from 'react';
import { Box, Typography, Button, Divider, Grid } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const ConfirmarProductos = ({ carrito, precioTotal, handleEliminarProducto }) => {

    const formatPrice = (price) => {
        return price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    };

    return (
        <Box sx={{ padding: { xs: 2, sm: 3 }, maxWidth: '800px', margin: 'auto' }}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <EmojiObjectsIcon sx={{ marginRight: 1 }} />
                        <Typography>
                            Para agregar productos a tu canasta, presiona el botón 'Seguir comprando' ubicado al inicio de la página. Serás enviado a la tienda nuevamente.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    {carrito.length > 0 ? (
                        <>
                            {carrito.map((producto) => (
                                <Box key={producto.id} sx={{ marginBottom: 3 }}>
                                    <Typography variant="h6">{producto.titulo}</Typography>
                                    <Typography>Precio unit: {formatPrice(producto.precio)}</Typography>
                                    <Typography>Precio total: {formatPrice(producto.precio * producto.cantidad)}</Typography>
                                    <Typography>Cantidad: {producto.cantidad}</Typography>
                                    <Button 
                                        variant="contained" 
                                        color="secondary" 
                                        onClick={() => handleEliminarProducto(producto.id)}
                                        sx={{ marginTop: 1 }}
                                    >
                                        Quitar unidad
                                    </Button>
                                    <Divider sx={{ marginTop: 2 }} />
                                </Box>
                            ))}
                            <Typography variant="h5" sx={{ marginTop: 2 }}>
                                Precio total: {formatPrice(precioTotal())}
                            </Typography>
                        </>
                    ) : (
                        <Typography variant="h5">Agrega productos al carrito para continuar</Typography>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ConfirmarProductos;
