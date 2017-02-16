/*
* AppBar and BottomNav are not used until some features are made.
* 09/26 @gnujoow
*/
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const home = <FontIcon className="material-icons">home</FontIcon>;
const todo = <FontIcon className="material-icons">format_list_numbered</FontIcon>;
const memo = <FontIcon className="material-icons">comment</FontIcon>;

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
            label="Home"
            icon={home}
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Todo"
            icon={todo}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Memo"
            icon={memo}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}
