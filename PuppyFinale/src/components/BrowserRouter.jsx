import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewPlayerForm from './NewPlayerForm'; 

function BrowserRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/new-player" component={NewPlayerForm} />
        {/* Other routes */}
      </Switch>
    </Router>
  );
}

export default BrowserRouter;
