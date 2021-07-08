import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Homepage from "./pages/Homepage.js";
import NoMatch from "./pages/NoMatch";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
