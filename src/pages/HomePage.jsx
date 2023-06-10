import React from 'react';
import { Hello } from '../components';

export default class HomePage extends React.Component {
  constructor (props = {}) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="page--home">
        Home Page

        <Hello />
      </div>
    );
  }
}
