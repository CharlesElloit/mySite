import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Work from "./pages/Projects.js";
import Courses from "./pages/Courses.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Work} />
        <Route path="/courses" component={Courses} />
      </Switch>
    </Router>
  );
}

export default App;
