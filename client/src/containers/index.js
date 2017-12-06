import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom';

import Loading from './../components/Loading';
import * as actions from './../actions/a_common';
import Bundle from './../components/Bundle';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.props.initApplication();
  }

  componentDidMount() {
    this.props.showLoading(false);
  }

  render() {

    const {
      common = {}
    } = this.props;

    return <div className="kanban-root">
      <Switch>
        <Route path='/1' component={ (props) => {
            return <Bundle load={ () => import('./1.test')}>
                {Test1Tpl => <Test1Tpl {...props} />}
              </Bundle>
          } 
        }/>
        <Route path='/2' component={ (props) => {
            return <Bundle load={ () => import('./2.test')}>
                {Test2Tpl => <Test2Tpl {...props} />}
              </Bundle>
          } 
        }/>
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
