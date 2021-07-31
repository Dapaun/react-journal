import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import UserContextProvider from './context/userContext/userContext';
import FooterComponent from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
            <NavBarComponent />
            <Routes />
            <FooterComponent />
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
