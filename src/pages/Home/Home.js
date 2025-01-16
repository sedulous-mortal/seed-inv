import seeds from '../../seeds.png';
import './Home.css';

function Home() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={seeds} className="App-logo" alt="logo" />
        <p>
          Welcome to AllMySeeds
        </p>
        <p>
          May your seeds be many, and easily tracked here!
        </p>
        <a
          className="App-link"
          href="./seeds"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Your Seeds
        </a>
      </header>
    </div>
  );
}

export default Home;
