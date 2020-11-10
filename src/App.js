import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AddReservations from './components/AddReservations/AddReservations';
import Home from './components/Home/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { useEffect } from 'react';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700
    })
  }, []);

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <SignUp />
        </Route>

        <Route path='/reservations'>
          <AddReservations />
        </Route>

        <Route path='*'>
          <PageNotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
