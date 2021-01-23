import './App.css';
import NavbarTop from './layout/NavbarTop';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <div className="header-space"></div>
      <HomePage />
      <div className="header-space"></div>
    </div>
  );
}

export default App;
 