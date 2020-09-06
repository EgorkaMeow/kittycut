import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main/Main';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/*' component={async () => {
          const response = await fetch('/backend/index.php', {
              method: 'POST',
              mode: 'cors',
              cache: 'no-cache',
              body: {
                  action: 'get_link',
                  link: 'kittycut.tk' + window.location.pathname,
              }
          });

          if(response !== "no"){
            window.location.href = response;
            return null;
          }
          else {
            window.location.href = "/";
            return null;
          }
        }} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
