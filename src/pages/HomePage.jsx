import React from 'react';
import {
  Header,
  MainInfo
} from '../components';
import '../assets/style/home-page.scss';

export default class HomePage extends React.Component {
  constructor (props = {}) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="g-page page--home">
        <Header />
        <MainInfo />
      </div>
    );
  }
}
