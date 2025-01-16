import { 
    Route, 
    Routes, 
    useMatch,
} from 'react-router-dom';
import Seed from './Seed';

function Seeds() {
    let match = useMatch('/seeds/:id');
    // npm i react-router-dom@latest might need to be run if useMatch needs a pattern
  
    return (
      <div>
        <h2>Seeds</h2>
        {match ? ( 
          <div>
            <h3>Profile of Seed ID: {match.params.id}</h3>
            <pre>
                <code>{JSON.stringify(match, null, 2)}</code>
            </pre>
          </div>
        ) : (
          <p> Seed not found. </p>
        )}
        {/* The Seeds page has its own <Switch> with more routes
            that build on the /seeds URL path. You can think of the
            2nd <Route> here as an "index" page for all seeds, or
            the page that is shown when no seed is selected */}
        <Routes>
          <Route path={`${match.path}/:id`}>
            <Seed />
          </Route>
          <Route path={match.path}>
            <h3>Please select a seed.</h3>
          </Route>
        </Routes>
      </div>
    );
  }

export default Seeds;