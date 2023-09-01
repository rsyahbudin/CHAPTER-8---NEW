import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddUser } from "./components/AddUser";
import { Edituser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            {/* For route */}
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/add" component={AddUser}></Route>
            <Route exact path="/edit/:id" component={Edituser}></Route>
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
};

export default App;
