import React, { PropTypes } from 'react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavBar from '../components/NavBar';
import BottomNav from '../components/BottomNav';
import AppIndex from './AppIndex';

export default class App extends React.Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <NavBar />
        <AppIndex />
        <BottomNav />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
