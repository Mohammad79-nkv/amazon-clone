import { Route, Switch } from 'react-router';
import './App.css';
import Checkout from './component/Checkout';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
