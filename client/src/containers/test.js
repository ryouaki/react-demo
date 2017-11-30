import React from 'react';
import { connect } from 'react-redux';

class TestTpl extends React.Component {
  render() {
    return <div>
        {this.props.message}
      </div>
  }
}

export default connect( (store) => {
  return {
    message: store.common.message
  }
}, {

})(TestTpl);
