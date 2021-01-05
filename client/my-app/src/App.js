import LoginPage from './views/LoginPage/LoginPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <LoginPage/>
      </Provider>
    </div>
  );
}

export default App;
