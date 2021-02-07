import React from 'react';
import './App.css';
import Login from './components/LoginPage/LoginSection';
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./auth/protected-route";
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/HomePage/Home'
import { Loading } from './components';
import YearGraph from './components/GraphPage/YearGraph';
import BrowseMovies from './components/BrowsePage/BrowseMovies'

const App: React.FC = () => {

  const { isLoading } = useAuth0();

  if (isLoading) return <Loading />

  return (
    <>
      <Login />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/graph" exact component={YearGraph} />
          <Route path="/movies/page/:page" component={BrowseMovies} />
      </Switch>
    </>
  )
}

export default App;
