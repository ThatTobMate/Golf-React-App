import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import LoginContainer from '../Containers/LoginContainer';
import CourseContainer from '../Containers/CourseContainer';
import User from '../Components/UserComponent';
import store from '../index'
import { checkForSession } from '../Actions/AuthActions';


export const getRoutes = (store) => {
  const authRequired = (nextState, replace, callback) => {
    // todo: in react-router 2.0, you can pass a single object to replace :)
    // if (!user.status === 'authenticated') {
    //   replace({ nextPathname: nextState.location.pathname }, '/', nextState.location.query)
    // }
    store.dispatch(checkForSession(callback))
    // const state = store.getState()
    // const user = state.authReducer
  };
  return (
    <Route path='/' component={App} onEnter={authRequired}>
      <IndexRoute component={LoginContainer} />
      <Route path='/user/:userId' component={User}/>
      <Route path='/addCourse' component={CourseContainer} onEnter={authRequired}/>
    </Route>
  );
}