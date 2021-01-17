import LoginPage from './views/LoginPage/LoginPage';
import AdminPage from './views/AdminPage/AdminPage.jsx';
import HomePage from './views/HomePage/HomePage.jsx';
import { Redirect } from "react-router-dom";
import {useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() { 

  const  {user}  = useSelector( state => state.users );

  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/login">
              {user ? <Redirect to="/" /> : <LoginPage/>}
            </Route>
            <Route path="/admin">
              {!user ? <Redirect to="/" /> : <AdminPage/>}
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
