import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Welcome from './welcome_page/Welcome';
import mainTheme from './general/styles/MainTheme';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <Route exact path='/' component={Welcome} />
      </ThemeProvider>
    </Router>
  );
};

export default App;
