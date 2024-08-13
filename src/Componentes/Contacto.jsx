import React from 'react';  // Importa React y useState para manejar el estado
import { useForm } from "react-hook-form";  // Importa useForm de react-hook-form para manejo de formularios
import { TextField, Button, Container, Typography, Box } from '@mui/material';  // Importa componentes de Material-UI

const Contacto = () => {
  // Desestructura métodos y estados de useForm para manejar el formulario
  const { register, formState: { errors, isValid }, setValue } = useForm({
    mode: 'onChange'  // Actualiza el estado del formulario en cada cambio
  });
  
  // Estado para verificar si el mensaje ha sido enviado

  // Función para formatear el RUT (número de identificación en Chile)
  const formatRut = (rut) => {
    if (!rut) return '';  // Retorna una cadena vacía si no hay valor
    rut = rut.replace(/[^0-9kK]/g, '');  // Elimina caracteres no numéricos excepto 'K' o 'k'
    rut = rut.replace(/k/g, 'K');  // Convierte 'k' a 'K'
    return rut.length > 1 ? `${rut.slice(0, -1)}-${rut.slice(-1)}` : rut;  // Agrega guion antes del último dígito
  }

  // Controlador de cambio para el campo RUT
  const handleRutChange = (event) => {
    const formattedRut = formatRut(event.target.value);  // Aplica el formato al RUT ingresado
    setValue('rut', formattedRut);  // Actualiza el valor del campo en react-hook-form
  }

  return (
    <Container maxWidth="sm">  {/* Contenedor centrado con un máximo de ancho pequeño */}
      <Box sx={{ mt: 7 }}>  {/* Espaciado superior */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>  {/* Centro el texto y añade margen inferior */}
          <Typography variant="h4" component="h1" gutterBottom>
            Contacto  {/* Título del formulario */}
          </Typography>
        </Box>
        <form>  {/* Maneja el envío del formulario */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 7 }}>  {/* Flexbox para organizar los campos del formulario */}
            {/* Campo para el nombre */}
            <TextField 
              label="Ingresá tu nombre" 
              variant="outlined" 
              {...register("nombre", { required: "Este campo es obligatorio" })}  // Registra el campo con validación
              fullWidth
              error={!!errors.nombre}  // Muestra error si hay problemas con el campo
              helperText={errors.nombre?.message}  // Muestra el mensaje de error
            />
            {/* Campo para el RUT */}
            <TextField 
              label="Ingresá tu RUT" 
              variant="outlined" 
              {...register("rut", { required: "Este campo es obligatorio" })}
              fullWidth
              error={!!errors.rut}
              helperText={errors.rut?.message}
              onChange={handleRutChange}  // Aplica formato al cambiar
            />
            {/* Campo para el email */}
            <TextField 
              label="Ingresá tu e-mail" 
              variant="outlined" 
              type="email" 
              {...register("email", { 
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  // Expresión regular para validar el formato del email
                  message: "El email debe tener el formato correcto"
                }
              })} 
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            {/* Campo para el teléfono */}
            <TextField 
              label="Ingresá tu teléfono" 
              variant="outlined" 
              type="tel" 
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  // Asegura que solo se ingresen números
              {...register("telefono", { 
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[0-9]*$/,  // Expresión regular para validar solo números
                  message: "El teléfono solo puede contener números"
                }
              })} 
              fullWidth
              error={!!errors.telefono}
              helperText={errors.telefono?.message}
            />
            {/* Campo para el mensaje */}
            <TextField 
              label="Ingresá tu mensaje" 
              variant="outlined" 
              {...register("mensaje", { required: "Este campo es obligatorio" })} 
              multiline
              rows={4}
              fullWidth
              error={!!errors.mensaje}
              helperText={errors.mensaje?.message}
            />
            {/* Botón para enviar el formulario */}
            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              disabled={!isValid}  // Desactiva el botón si el formulario no es válido
            >
              Enviar
            </Button>
          </Box>
        </form>
        {/* Mensaje que se muestra si el mensaje fue enviado exitosamente */}
      </Box>
    </Container>
  );
}

export default Contacto;  // Exporta el componente para usarlo en otras partes de la aplicación
