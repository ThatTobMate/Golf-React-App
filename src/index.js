import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './Store/Store';
import './index.css';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import {getRoutes} from './Routes/Routes';
import * as Colors from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.lightGreen500,
    primary2Color: Colors.green500,
    primary3Color: Colors.grey400,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkblack,
    alternateTextColor: Colors.white,
  },
  appBar: {
    height: 50,
  },
});

var config = {
  apiKey: "AIzaSyAD5OqcuGExhWi_oASzr42rq5IVvR7jdCY",
  authDomain: "golfapp-44b1f.firebaseapp.com",
  databaseURL: "https://golfapp-44b1f.firebaseio.com",
  storageBucket: "golfapp-44b1f.appspot.com",
};
firebase.initializeApp(config);

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(checkForSession());

// Routes


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        {getRoutes(store)}
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

export default store;
