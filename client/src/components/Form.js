import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.PureComponent {

  static propTypes = {
    onSubmit: PropTypes.func,
    path: PropTypes.string,
    method: PropTypes.oneOf([
      'get',
      'post'
    ]),
    target: PropTypes.string,
    valid: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    let {
      onSubmit
    } = this.props;
    if (onSubmit) {
      return this.props.onSubmit(e);
    } else {
      return true;
    }
  }

  render() {
    let {
      path,
      method,
      onSubmitHandler,
    } = this.props;

    return <form path={ path } method={ method } onSubmit={ onSubmitHandler }>
      { this.props.children }
    </form>
  }
}
