import './styles/bootstrap.css'
// import './styles/font-awesome.min.css'
import './styles/responsive.css'
import './styles/style.css'
import './styles/sweetalert2.min.css'
// import './styles/style.css.map'
import './styles/style.scss'


import HomePage from './pages/HomePage'
import { CartProvider } from './Context/CartContext'
// import './App.css';
// import Nav from './components/layout/Nav';
// import Header from './components/layout/Header'
// import Footer from './components/layout/Footer'
// import NosotrosPage from './pages/NosotrosPage'
// import ContactoPage from './pages/ContactoPage'
// import Carrito from './pages/Carrito'

function App() {
  return (
<CartProvider> 
  <HomePage/>
</CartProvider>
  );
}

export default App;
