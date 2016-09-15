import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import {update, logOut} from '../Actions/AuthActions';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const style = {
  picture: {
    height: '100%',
    width: '100%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  trophies: {
    height: '20%',
    width: '100%'
  },
  paper: {
    height: '100%',
    width: '100%'
  },
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      marginBottom: 24,
    },
    gridTile: {
      width: '33%'
    },
    gridImage: {
      width: 'initial',
      maxWidth: '100%'
    }
};

export class UserDetailsComponent extends Component {
  render() {
    console.log(this.props)
    const { user } = this.props;
    return (
      <div>
        <h1> { user.user && user.user.name }</h1>
      </div>
    )
  }
};

export class UserTrophiesComponent extends Component {
  render() {
    console.log(this.props.user.trophies);
    const { user } = this.props;
    console.log(user, user.trophies)
    return (
      <div style={style.root}>
        <GridList
          cellHeight={200}
          style={style.gridList}
        >
          <Subheader>Recent Trophies</Subheader>
          {user.trophies.map((trophy, index) => (
            <Paper style={style.paper} zDepth={1}>
              <GridTile
                key={index}
                title={trophy.name}
                subtitle={<span><b>{trophy.description}</b></span>}
              >
                <img style={{maxWidth: '30%'}} src={trophy.image} />
              </GridTile>
            </Paper>
          ))}
        </GridList>
      </div>
    )
  }
};

export class UserProfilePicture extends Component {
  render () {
    const { user } = this.props;
    var alt = 'http://img2.timeinc.net/people/i/2010/database/100816/tiger-woods-300.jpg';
    return (
      <img src={user.image || alt} style={{height: '100%', width: '100%'}}/>
    )
  }
}
