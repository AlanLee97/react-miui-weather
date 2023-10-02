import React from 'react';
import './tip-panel-content.style.scss';

function TipItemBox(props = {}) {
  return (
    <section className="cpn--tip-item-box">
      <div className='tip-day'>明天</div>
      <div className='temp-text'>31°/25°</div>
      <img className='icon-cloth' src={require('../../../assets/imgs/icon/icon-tips-cloth.svg')} alt="" />
      <div className='tip-title'>适宜短袖</div>
    </section>
  );
}

export default function TipPanelContent(props = {}) {
  return (
    <section className="cpn--tip-panel-content">
      <div className='weather-info'>
        <span>中雨转雷阵雨</span>
        <span>31°/25°</span>
      </div>
      <div className='tip-text-box'>
        <div className='tip-title-text'>适宜衬衫</div>
        <div className='tip-info-text'>天气较热，注意防暑降温</div>
      </div>
      <div className='tip-item-box-wrapper'>
        <TipItemBox />
        <TipItemBox />
        <TipItemBox />
      </div>
    </section>
  );
}
