import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPages from "./jamesrental-frontend/pages/LandingPages";
import Header from "./jamesrental-frontend/source/Header";


function App () {
  return(
  <Header>
    <Router>
      <Switch>
        <Route path='/' exact component={LandingPages}/>
      </Switch>
      </Router>
  </Header>
  );
}

export default App;
