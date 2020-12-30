import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './welcome_page/Welcome';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Welcome} />
    </Router>
  );
};

export default App;
