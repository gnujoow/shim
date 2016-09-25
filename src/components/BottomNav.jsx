/*
* AppBar and BottomNav are not used until some features are made.
* 09/26 @gnujoow
*/
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const item = <FontIcon className="material-icons">item</FontIcon>;

export default class BottomNav extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedIndex: 0,
    };
  }

  select(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            icon={item}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            icon={item}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            icon={item}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
