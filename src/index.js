import React from 'react';
import ReactDOM from 'react-dom';
import { ReduxComponent } from './store';
import { ApolloComponent } from './apollo';
import { App } from './App';



ReactDOM.render(
<ReduxComponent>
  <ApolloComponent>
    <App />
  </ApolloComponent>
</ReduxComponent>,
 document.getElementById('app'));

