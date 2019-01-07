import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/details" component={Details} />
        </Switch>
      </Router>
    );
  }
}

export default App;
