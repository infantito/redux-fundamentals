import React from 'react';
import { connect } from 'react-redux';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';

import {
  handleInitialData
} from '../actions/shared';

class App extends React.Component {
  componentDidMount() {
    // we have access to dispatch thanks to connect()
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    // loading states
    if (loading === true) {
      return <h3>Loading</h3>;
    }

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.loading,
  })
)(App);
