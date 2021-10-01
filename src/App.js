import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HelloPage from "./pages/HelloPage";
import HomePage from "./pages/HomePage";
import { PeoplePage } from './pages/PeoplePage';

function App() {
  return (
    <Switch>
      <Route key="home" path="/" exact={true} component={HomePage} />
      <Route key="hello" path="/hello" exact={true} component={HelloPage} />
      <Route key="people" path="/people" extract={true} component={PeoplePage} />
    </Switch>
  );
}

export default App;
