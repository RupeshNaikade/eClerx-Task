import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Admin from './components/Admin/admin';
import User from './components/user/user';
import history from './components/history';
import ReactNotification from 'react-notifications-component';
function App() {
  return (
    <BrowserRouter history={history}>
    <ReactNotification />
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/admin" component={Admin}></Route>
          {/* <Route path="/adResidence" component={AdResidence}></Route> */}
        </Switch>
      </BrowserRouter>

  );
}

export default App;
