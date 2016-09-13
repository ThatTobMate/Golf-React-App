import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import LoginContainer from '../Containers/LoginContainer';
import CourseContainer from '../Containers/CourseContainer';
import UserContainer from '../Containers/UserContainer';
import { checkForSession } from '../Actions/AuthActions';


export const getRoutes = (store) => {
  // const authRequired = (nextState, replace, callback) => {
  //   // todo: in react-router 2.0, you can pass a single object to replace :)
  //   // if (!user.status === 'authenticated') {
  //   //   replace({ nextPathname: nextState.location.pathname }, '/', nextState.location.query)
  //   // }
  //   debugger
  //   if (localStorage.getItem('uid')) {
  //     callback()
  //   }

  //   // const state = store.getState()
  //   // const user = state.authReducer
  // };
  return (
    <Route path='/' component={App}>
      <IndexRoute component={LoginContainer} />
      <Route path='/user/:userId' component={UserContainer} />
      <Route path='/addCourse' component={CourseContainer} />
    </Route>
  );
}