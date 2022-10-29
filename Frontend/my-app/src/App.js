//IMPORTACIÓN DE ESTILOS
import Home from './pages/admin/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*Aca va mi menu*/} 
        <Home />
      </header>
      <aside>
        {/*Aca van mis productos, los dulces*/}
      </aside>
    </div>
  );
}

export default App;
