import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
