import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const data = {
  dataList: [
    {
      icon: require('../../../assets/imgs/icon/icon-qing.svg'),
      day: '今天',
      weather: '晴',
      airLevel: '优',
      maxTemp: '31',
      minTemp: '25'
    },
    {
      icon: require('../../../assets/imgs/icon/icon-duoyun.svg'),
      day: '明天',
      weather: '多云',
      airLevel: '良',
      maxTemp: '31',
      minTemp: '25'
    },
    {
      icon: require('../../../assets/imgs/icon/icon-yin.svg'),
      day: '周一',
      weather: '阴',
      airLevel: '优',
      maxTemp: '31',
      minTemp: '25'
    }
  ]
};

function ThumbDaysInfoItem(props = {}) {
  const { data = {} } = props;
  return (
    <section className="cpn--thumb-days-info-item">
      <div className='days-info-item item-left'>
        <span className='icon-wrapper g-center-vh'>{data.icon && <img className='icon' src={data.icon} alt="icon" />}</span>
        <span className='day'>{data.day}</span>
        <span>{data.weather}</span>
      </div>
      <div className='days-info-item item-right'>
        <span className='air-level g-center-vh'>{data.airLevel}</span>
        <span>{data.maxTemp} / {data.minTemp}</span>
      </div>
    </section>
  );
}

export default function ThumbDaysInfo(props = {}) {
  const dataList = data.dataList;
  const navigate = useNavigate();
  const goPage = (path) => {
    navigate(path);
  };
  return (
    <div className="cpn--thumb-days-info">
      {
        dataList.map((data, index) => <ThumbDaysInfoItem data={data} key={ 'ThumbDaysInfoItem_' + index} />)
      }
      <div className='btn-recent-info g-center-vh' onClick={() => goPage('/15days-trend')}>查看近15日天气</div>
    </div>
  );
}
