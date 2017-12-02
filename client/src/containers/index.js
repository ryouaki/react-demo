import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom'
import axios from 'axios';

import {
  INIT_APPICATION
} from './../actions';

import Loading from './../components/Loading';

import TestTpl from './test';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.props.init();
  }
  render() {

    const {
      common = {}
    } = this.props;

    return <div className="kanban-root">
      <Switch>
        <Route path='/' component={TestTpl} />
      </Switch>
      {common.isFetching&&<Loading />}
    </div>
  }
}

export default connect((store) => {
  return {
    common: store.common
  }
}, {
  init: () => {
    return async (dispatch) => {
      axios.get('/api/v1/test')
        .then((res) => {
          dispatch({
            type: INIT_APPICATION,
            data: {
              message: JSON.stringify(res.data.msg)
            }
          })
        })
        .catch((err) => {
          dispatch({
            type: INIT_APPICATION,
            data: {
              message: JSON.stringify(err)
            }
          })
        })
    }
  }
})(Container);
