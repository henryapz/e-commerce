import './App.css';
import NavMenu from './components/NavMenu/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <LandingPage />
    </div>
  );
}

export default App;
