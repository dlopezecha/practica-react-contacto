import logo from './logo.svg';
import './App.css';
import ContactsComponent from './components/containers/contacto.container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ContactsComponent></ContactsComponent>
        
      </header>
    </div>
  );
}

export default App;
