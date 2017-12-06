import React from 'react';
import { connect } from 'react-redux';

class TestTpl extends React.Component {
  render() {
    return <div>
        test2
      </div>
  }
}

export default connect( (store) => {
  return {
  }
}, {

})(TestTpl);
