import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Header></Header>

    </Provider>
  );
}

export default App;
