import './About.css';

function About() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            All My Seeds
          </h2>
          <h5>An Inventory App</h5>
          <div className="info">
            <p>
              Use AMS to manage your seeds: view which (and how many) you have in stock, as well as where in your realm (e.g. home, shed) you have stored them.
            </p>
          </div>
          <a
            className="App-link"
            href="/seeds"
            rel="noopener noreferrer"
          >
            View Your Seeds
          </a>
        </header>
      </div>
    );
  }

  export default About;