import logo from './logo.svg';
import './App.css';
import Home from './container/home';
import Users from './container/users';
import About from './container/about';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

function App() {

  let routes = (
    <Switch>
      <Route path="/home" exact component={Home}/> 
      <Route path="/about" exact component={About} />
      <Route path="/users" exact component={Users}/>
    </Switch>
  );
  return (
   <div>
     <nav>
       <a href="/home">HOME</a>
       <a href="/about">ABOUT</a>
       <a href="/users">USERS</a>
     </nav>
     {routes}
   </div>
  );
}

export default App;
