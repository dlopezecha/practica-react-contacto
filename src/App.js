import logo from './logo.svg';
import './App.css';
import ContactsComponent from './components/containers/contacto.container';
import ClockComponent from './components/pures/clock.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Reto 1 Compomente de contacto */}
        <ContactsComponent></ContactsComponent>
        {/* Reto 2 Convertir componente clase en componente funcional */}
        <ClockComponent></ClockComponent>
        
      </header>
    </div>
  );
}

export default App;
