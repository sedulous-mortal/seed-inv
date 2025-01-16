import './App.css';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
  Link
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Seeds from './pages/Seeds/Seeds';
import Seed from './pages/Seeds/Seed';

function App() {
  return (
      <Router>
      <div>
        <header className="navLinks">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/seeds">My Seeds</Link>
          </div>
          <div>
            <Link to="/seeds/1">Seed 1: Arugula</Link>
          </div>
        </header>

        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/seeds" element={<Seeds/>}/>
          <Route path="/seeds/:id" element={<Seed />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
