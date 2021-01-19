import LoginPage from './views/LoginPage/LoginPage';
import AdminPage from './views/AdminPage/AdminPage.jsx';
import HomePage from './views/HomePage/HomePage.jsx';
import SearchPage from './views/SearchPage/SearchPage.jsx';
import { Redirect } from "react-router-dom";
import {useSelector } from 'react-redux';
import DetailPage from './views/DetailPage/DetailPage.jsx';

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
            <Route path="/search">
              <SearchPage/>
            </Route>
            <Route path="/details">
              <DetailPage/>
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
