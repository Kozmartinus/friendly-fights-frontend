import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./welcome_page/Welcome";
import Home from "./home_page/Home";

const App = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        component={localStorage.getItem("user") === null ? Welcome : Home}
      />
    </Router>
  );
};

export default App;
