import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
} from 'react-router-dom'

class Container extends React.Component {
  render() {
    return <Switch>
        <Route component={ () => <div>11</div>} />
      </Switch>
  }
}

export default connect( (store) => {
  return {

  }
}, {

})(Container);