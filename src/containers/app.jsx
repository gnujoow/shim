import React, { PropTypes } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import baseTheme from '../../assets/theme';
import AppIndex from './AppIndex';

export default class App extends React.Component {
  getChildContext() { // eslint-disable-line class-methods-use-this
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <div>
        <AppIndex />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};
