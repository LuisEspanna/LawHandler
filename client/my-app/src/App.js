import Hello from './components/atoms/Hello.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Hello/>
      </Provider>
    </div>
  );
}

export default App;
