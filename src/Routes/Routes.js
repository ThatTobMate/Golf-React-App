import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import LoginContainer from '../Containers/LoginContainer';
import CourseContainer from '../Containers/CourseContainer';
import UserContainer from '../Containers/UserContainer';
import { checkForSession } from '../Actions/AuthActions';


export const getRoutes = (store) => {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={LoginContainer} />
      <Route path='/user/:userId' component={UserContainer} />
      <Route path='/addCourse' component={CourseContainer} />
    </Route>
  );
}