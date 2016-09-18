import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { style } from '../../Themes/UserStyles';

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