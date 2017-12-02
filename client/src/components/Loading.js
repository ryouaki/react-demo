import React from 'react';

export default class Loading extends React.PureComponent {

  constructor(props) {
    super(props);
    let node = document.getElementById('load-container');
    this.state = {
      loading: node
    }
  }

  componentWillMount() {
    this.state.loading.classList.add('show');
  }

  componentWillUnmount() {
    this.state.loading.classList.remove('show');
  }

  render() {
    return null;
  }
}