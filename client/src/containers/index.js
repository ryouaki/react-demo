import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom';

import Loading from './../components/Loading';
import * as actions from './../actions/a_common';

import TestTpl from './test';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.props.initApplication();
  }
  render() {

    const {
      common = {}
    } = this.props;

    return <div className="kanban-root">
      <Switch>
        <Route path='/' component={ TestTpl } />
      </Switch>
      { common.isFetching && <Loading /> }
    </div>
  }
}

export default connect((store) => {
  return {
    common: store.common
  }
}, {
  ...actions
})(Container);
