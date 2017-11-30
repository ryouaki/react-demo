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

import TestTpl from './test';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.props.init();
  }
  render() {
    return <Switch>
      <Route path='/' component={TestTpl} />
    </Switch>
  }
}

export default connect((store) => {
  return {
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
