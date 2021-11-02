import { Route, Switch } from 'react-router';
import './App.css';
import Checkout from './component/Checkout';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/checkout" exact component={Checkout}/>
      </Switch>
    </div>
  );
}

export default App;
