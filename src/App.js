import './App.css';
import { Login } from './componets/buttons';
import { CreateAcount } from './componets/buttons';
import Search from './componets/search';
import Products from './componets/products';

function App() {
  return (
    <div className="App">

      <header className='header'>
        <h1 className='header__title'>Remix Shop</h1>
        <div className='header__link'>
          <Login/>
          <CreateAcount/>
        </div>
        
      </header>

      <main className="container">
        
          <Search/>
          
        

        <div className="container__inside">
          <button className="container__inside-btn container__inside-btn--price">Precio</button>
          <button className="container__inside-btn container__inside-btn--categories">Categoría</button>
        </div>

        <Products/>
      </main>

    <footer className='footer'>
      <p>&copy; Remix. todos los derechos reservados</p>
    </footer>

    </div>
  );
}

export default App;
