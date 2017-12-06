import React from 'react';
import { connect } from 'react-redux';

class TestTpl extends React.Component {
  render() {
    return <div>
        test1
      </div>
  }
}

export default connect( (store) => {
  return {
  }
}, {

})(TestTpl);
