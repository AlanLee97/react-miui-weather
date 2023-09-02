import React from 'react';
import './style.scss';
import { numberPaddingZero } from '@alanlee97/utils';

function createData() {
  const arr = [];
  const h = new Date().getHours();
  for (let i = 0; i < 24; i++) {
    arr.push({
      icon: require('../../assets/imgs/icon/icon-qing.svg'),
      windLevel: '1级',
      airLevel: '优',
      hour: i === h ? '现在' : `${numberPaddingZero(i)}:00`,
      temp: '30°'
    });
  }
  return arr;
}

const data = {
  dataList: createData()
};

function Forecast24HoursItem(props = {}) {
  const { data = {} } = props;
  return (
    <section className="cpn--forecast-24hours-item">
      <span className='temp'>{data.temp}</span>
      <span className='icon-wrapper g-center-vh'>{data.icon && <img className='icon' src={data.icon} alt="icon" />}</span>
      <span className='wind-level'>{data.windLevel}</span>
      <span className='air-level g-center-vh'>{data.airLevel}</span>
      <span>{data.hour}</span>
    </section>
  );
}

export default function Forecast24Hours(props = {}) {
  const dataList = data.dataList;
  return (
    <section className="cpn--forecast-24hours">
      <div className='module-title'>
        <img className='icon' src={require('../../assets/imgs/icon/icon-clock.svg')} alt="" />
        24小时预报
      </div>
      <div className='item-wrapper'>
        {
          dataList.map((data, index) => <Forecast24HoursItem data={data} key={ 'ThumbDaysInfoItem_' + index} />)
        }

      </div>
    </section>
  );
}
