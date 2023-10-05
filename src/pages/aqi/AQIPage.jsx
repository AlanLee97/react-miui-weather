import React, { useState } from 'react';
import './style.scss';

function CustomTitle(props = {}) {
  return (
    <section className="cpn--custom-title">
      <div className='title-text'>空气质量</div>
      <div className='annouce-info'>
        <span>宝安区</span>
        <span>银田支一路</span>
        <span>10:00发布</span>
      </div>
    </section>
  );
}

function AQIDetail(props = {}) {
  const [aqiTypes, setAqiTypes] = useState([
    {
      type: 'PM2.5',
      value: 9
    },
    {
      type: 'PM10',
      value: 35
    },
    {
      type: 'SO2',
      value: 5
    },
    {
      type: 'NO2',
      value: 11
    },
    {
      type: 'O3',
      value: 51
    },
    {
      type: 'CO',
      value: 0.6
    }
  ]);

  return (
    <section className="cpn--aqi-detail">
      <div className='aqi-summary-wrapper'>
        <div className='aqi-summary'>
          <span className='aqi-num'>19</span>
          <span className='aqi-text'>优</span>
        </div>
        <div className='tip-text'>空气很好，快呼吸新鲜空气，拥抱大自然吧</div>
      </div>
      <div className='aqi-types-wrapper'>
        {
          aqiTypes.map((item, i) => {
            return (
              <div className='aqi-type-box' key={i}>
                <div className='aqi-value'>{item.value}</div>
                <div className='aqi-type'>{item.type}</div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

function Chart24hAQIForcast(props = {}) {
  const [viewType, setViewType] = useState(1); // 1-时间视图，2-日历视图
  const iconViewTimeClass = [
    'icon-view-type-wrapper',
    viewType === 1 ? 'active-view' : ''
  ];
  const iconViewCalendarClass = [
    'icon-view-type-wrapper',
    viewType === 2 ? 'active-view' : ''
  ];

  const onClickIconView = (val) => {
    setViewType(val);
  };

  return (
    <section className="cpn--chart-24h-aqi-forcast">
      <div className='title-row'>
        <div className='title-text'>24小时空气质量预报</div>
        <div className='view-type-wrapper'>
          <div className={window.$className(iconViewTimeClass)} onClick={() => onClickIconView(1)}>
            <img className='icon-view-type' src={require('../../assets/imgs/icon/icon-clock-black.svg')} alt="" />
          </div>
          <div className={window.$className(iconViewCalendarClass)} onClick={() => onClickIconView(2)}>
            <img className='icon-view-type' src={require('../../assets/imgs/icon/icon-calendar.svg')} alt="" />
          </div>
        </div>
      </div>
      <div className='chart-wrapper'>
        图表区域
      </div>
    </section>
  );
}

function NearbyAQI(props = {}) {
  return (
    <section className="cpn--nearby-aqi">
      <div className='nearby-aqi-title'>附近空气质量</div>
      <div className='map-wrapper'>
        <div className='map-view'>
        地图
        </div>
      </div>
      <div className='nearby-checkpoint-list'>
        <div className='nearby-checkpoint'>
          <span>
            <span className='neraby-title'>南油</span>
            <span className='other-info'>最近监测站9.6km</span>
          </span>

          <span className='aqi-text'>
            <span>33</span>
            <span>优</span>
          </span>
        </div>
        <div className='nearby-checkpoint'>
          <span>
            <span className='neraby-title'>深圳市</span>
            <span className='other-info'>全市10个站点平均值</span>
          </span>

          <span className='aqi-text'>
            <span>33</span>
            <span>优</span>
          </span>
        </div>
      </div>
    </section>
  );
}

export default function AQIPage(props = {}) {
  const { BasePage } = window.$components;
  return (
    <BasePage name="aqi">
      <CustomTitle />
      <AQIDetail />
      <Chart24hAQIForcast />
      <NearbyAQI />
    </BasePage>
  );
}
