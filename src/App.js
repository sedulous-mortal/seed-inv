import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route,
  Link,
  useMatch,
  useParams
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/seeds">My Seeds</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/seeds" element={<Seeds/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Seeds() {
  let match = useMatch();
  // npm i react-router-dom@latest might need to be run if useMatch needs a pattern

  return (
    <div>
      <h2>Seeds</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Seeds page has its own <Switch> with more routes
          that build on the /seeds URL path. You can think of the
          2nd <Route> here as an "index" page for all seeds, or
          the page that is shown when no seed is selected */}
      <Routes>
        <Route path={`${match.path}/:seedId`}>
          <Seed />
        </Route>
        <Route path={match.path}>
          <h3>Please select a seed.</h3>
        </Route>
      </Routes>
    </div>
  );
}

function Seed() {
  let { seedId } = useParams();
  return <h3>Requested seed ID: {seedId}</h3>;
}

export default App;
