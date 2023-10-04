import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../../../context/AppContext';
import './style.scss';
import { createPortal } from 'react-dom';

export default function WeatherBg(props = {}) {
  const appContext = useContext(AppContext);
  const cloudWrapperRef = useRef();
  const { portal = true } = props || {};

  useEffect(() => {
    if (appContext.scrollInfo.scrollPercent < 20) {
      let scale = 0.1 * appContext.scrollInfo.scrollPercent;
      const scrollY = -10 * appContext.scrollInfo.scrollPercent;
      if (scale < 1) scale = 1;
      cloudWrapperRef.current.style.transform = `scale(${scale}) translate(0, ${scrollY}px)`;
      cloudWrapperRef.current.style.opacity = `${1 - (appContext.scrollInfo.scrollPercent * 0.05)}`;
    }
    if (appContext.scrollInfo.atBottom) {
      cloudWrapperRef.current.style.opacity = 0;
    }
  }, [appContext]);

  const dom = (
    <section className="cpn--weather-bg">
      <div className='weather-bg-wrapper'>
        <div className='img-cloud-wrapper' ref={cloudWrapperRef}>
          <img className='img-cloud' src={require('../../../assets/imgs/yun2.webp')} alt="" />
        </div>
      </div>
    </section>
  );

  return portal ? createPortal(dom, document.body) : dom;
}
