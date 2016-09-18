import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import {update, logOut} from '../Actions/AuthActions';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';

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
  },
  trophyContainer: {
    width: '100%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  tournamentContainer: {
    width: '100%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

export class UserDetailsComponent extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1> { user.user && user.user.name }</h1>
      </div>
    );
  };
};

export class UserTrophiesComponent extends Component {
  render() {
    const { user } = this.props;
    return (
      <div style={style.root}>
        <GridList
          cellHeight={200}
          style={style.gridList}
        >
          {user.trophies.map((trophy, index) => (
              <GridTile
                style={style.trophyContainer}
                key={index}
                title={trophy.name}
                subtitle={<span><b>{trophy.description}</b></span>}
              >
                <img style={{maxWidth: '30%'}} src={trophy.image} />
              </GridTile>
          ))}
        </GridList>
      </div>
    );
  };
};

export class UserTournamentsComponent extends Component {
  render () {
    const { user } = this.props;
    return (
      <div style={style.root}>
        <GridList
          cellHeight={200}
          style={style.gridList}
        >
          {user.tournaments.map((tournament, index) => (
              <GridTile
                style={style.tournamentContainer}
                key={index}
                title={tournament.title}
                subtitle={<span><b>Winner: Tobias</b></span>}
              >
                <img style={{maxWidth: '30%'}} src={tournament.image} />
              </GridTile>
          ))}
        </GridList>
      </div>
    );
  };
};

export class UserProfilePicture extends Component {
  render () {
    const { user } = this.props;
    var alt = 'http://img2.timeinc.net/people/i/2010/database/100816/tiger-woods-300.jpg';
    return (
      <img src={user.image || alt} style={{height: '100%', width: '100%'}}/>
    );
  };
};

export class UserTabs extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 'tournaments',
      };
    }

    handleChange = (value) => {
      this.setState({
        value: value,
      });
    };

    render() {
      const { user } = this.props;
      return (
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Tournaments" value="tournaments" >
            { user.tournaments ? <UserTournamentsComponent  user={this.props.user} /> : <CircularProgress size={2} />}
          </Tab>
          <Tab label="Trophies" value="trophies">
            { user.trophies ? <UserTrophiesComponent  user={this.props.user} /> : <CircularProgress size={2} />}
          </Tab>
        </Tabs>
      );
    }
}
