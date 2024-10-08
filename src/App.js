import React from 'react';
import './main.css';
import Navbar from './Componentes/Navbar';
import ItemListContainer from './Componentes/Productos/ItemListContainer';
import ItemDetailContainer from './Componentes/Productos/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './Componentes/Nosotros';
import Contacto from './Componentes/Contacto';
import { CartProvider } from './Context/CardContext';
import Carito from './Componentes/Compra/Carito'; // Corregido aquí
import Inicio from './Componentes/Inicio/Inicio';
import Footer from './Componentes/Footer';
import ConfirmacionCompra from './Componentes/Compra/ConfirmacionCompra';
import Login from './Componentes/Login';
import Blog from './Componentes/Blog';
import { UserProvider } from './Context/UserContext';
import ScrollToTop from './Utils/ScrollToTop';
import TermsOfService from './Componentes/Policy/TermsOfService';
import PrivacyPolicy from './Componentes/Policy/PrivacyPolicy';

function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <BrowserRouter basename="/onloop">
            <ScrollToTop />
            {/* Barra */}
            <Navbar />
            {/* Main */}
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/carrito" element={<Carito />} />
              <Route path="/confirmacion" element={<ConfirmacionCompra />} />
              <Route path="/iniciar-sesion" element={<Login />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
            {/* Footer */}
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
