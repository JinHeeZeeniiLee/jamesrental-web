import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./jamesrental-frontend/pages/LandingPages";
import Header from "./jamesrental-frontend/source/Header";


function App () {
  return(
  <Header>
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPage}/>
      </Switch>
      </Router>
  </Header>
  );
}

export default App;
