import Todos from './Components/Todos/Todos.component';
import store from './Redux/Store';
import { Provider } from 'react-redux'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Todos />
      </Provider>
    </div>
  );
}

export default App;
