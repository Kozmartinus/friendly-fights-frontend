import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path='/'>
        <p>Welcome Page</p>
      </Route>
    </Router>
  );
};

export default App;
