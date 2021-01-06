import LoginPage from './views/LoginPage/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Provider store={store}>
          <Switch>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/admin">
              <div>Admin</div>
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
          
        </Provider>
      </div>
    </Router>
    
  );
}

export default App;
