import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './paginas/Home/Home'
import * as serviceWorker from './serviceWorker';
import UserInfo from './paginas/UserInfo/UserInfo';

function App() {
    return (
      <div className="app">
        {/* <Navbar /> */}
  
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:user" component={({match}) => (<UserInfo id={match.params.user} />)} />
         </Switch>
      </div>
    )
  }

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
serviceWorker.unregister();
