import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
