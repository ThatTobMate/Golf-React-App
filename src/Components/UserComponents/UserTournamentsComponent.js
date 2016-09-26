import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { style } from '../../Themes/UserStyles';

export class UserTournamentsComponent extends Component {
  render () {
    const { tournaments } = this.props;
    return (
      <div style={style.root}>
        <GridList
          cellHeight={200}
          style={style.gridList}
        >
          {tournaments.map((tournament, index) => (
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