import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom';

import Loading from './../components/Loading';
import * as actions from './../actions/a_common';
import Bundle from './../components/Bundle';
import { getPublicUrl } from './../common/utils';

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

    if (!common.isLogined) {
      return <Bundle load={ () => import('./login') }>
          {Login => <Login />}
        </Bundle>
    } else {
      return <div className="kanban-root">
          <Switch>
            <Route path={ getPublicUrl('/1') } component={ (props) => {
                return <Bundle load={ () => import('./1.test') }>
                  {Test1Tpl => <Test1Tpl {...props} />}
                </Bundle>
              } 
            }/>
            <Route path={ getPublicUrl('/2') } component={ (props) => {
                return <Bundle load={ () => import('./2.test') }>
                  {Test2Tpl => <Test2Tpl {...props} />}
                </Bundle>
              } 
            }/>
          </Switch>
          { common.isFetching && <Loading /> }
        </div>
    }
  }
}

export default connect((store) => {
  return {
    common: store.common
  }
}, {
  ...actions
})(Container);
