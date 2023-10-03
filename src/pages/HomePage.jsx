import React from 'react';
import {
  Header,
  MainInfo,
  ThumbDaysInfo,
  Forecast24Hours,
  OtherInfo,
  ForecastVideo,
  TipsList,
  FooterText,
  WeatherBg
} from '../components';

import '../assets/style/home-page.scss';

export default class HomePage extends React.Component {
  constructor (props = {}) {
    super(props);
    this.state = {

    };
  }

  onScroll = (e) => {
    if (this.props.onScroll && typeof this.props.onScroll === 'function') {
      this.props.onScroll(e);
    }
  };

  render() {
    return (
      <div className="g-page page--home" id='home' onScroll={this.onScroll}>
        <WeatherBg />
        <Header />
        <MainInfo />
        <ThumbDaysInfo />
        <Forecast24Hours />
        <OtherInfo />
        <ForecastVideo />
        <TipsList />
        <FooterText />
      </div>
    );
  }
}
