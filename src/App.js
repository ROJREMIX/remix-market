import './App.css';

function App() {
  return (
    <div className="App">

      <header className='header'>
        <h1 className='header__title'>Remix Shop</h1>
      </header>

      <main className="container">
        <div className="container__interaction">
          <input className="container__search" type="text" placeholder="Búsqueda" autoComplete="off"/>
          <a className="container__link container__link--login" href="#">Iniciar sesión</a>
          <a className="container__link container__link--createAccount" href="#">Crear cuenta</a>
        </div>

        <div className="container__inside">
          <button className="container__inside-btn container__inside-btn--price">Precio</button>
          <button className="container__inside-btn container__inside-btn--categories">Categoría</button>
        </div>

        <section className='container__section'>
          
        </section>
      </main>

    <footer className='footer'>
      <p>&copy; Remix. todos los derechos reservados</p>
    </footer>

    </div>
  );
}

export default App;
