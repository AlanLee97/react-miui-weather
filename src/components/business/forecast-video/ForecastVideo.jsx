import React from 'react';
import { IconWrapper } from '../../../components';
import './style.scss';

export default function ForecastVideo(props = {}) {
  return (
    <section className="cpn--forecast-video">
      <div className='forecast-title-wrapper'>
        <p className='forecast-title'>央视天气预报</p>
        <p className='forecast-desc'>关注每日实时天气</p>
      </div>
      <div className='play-icon-wrapper g-center-abs'>
        <IconWrapper className="g-center-abs">
          <svg t="1693673630748" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3335" width="16" height="16"><path d="M912.724884 429.355681L208.797545 13.198638C151.603449-20.597874 64.01249 12.198741 64.01249 95.790112V927.904219c0 74.992259 81.391599 120.187594 144.785055 82.591475l703.927339-415.957064c62.793518-36.996181 62.993498-128.186768 0-165.182949z" p-id="3336" fill="#ffffff"></path></svg>
        </IconWrapper>
      </div>
    </section>
  );
}
