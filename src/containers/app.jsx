import React, { PropTypes } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import baseTheme from '../../assets/theme';
import AppIndex from './AppIndex';
import BottomNav from '../components/BottomNav';

export default class App extends React.Component {
  getChildContext() { // eslint-disable-line class-methods-use-this
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={() => alert('왼쪽 메뉴 클릭')}
        />
        <AppIndex />
        <BottomNav />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
