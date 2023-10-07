import React, { useCallback, useState } from 'react';
import { numberPaddingZero, getDateObjectValue } from '@alanlee97/utils';
import './style.scss';

function DayInfo(props = {}) {
  const { data = {} } = props || {};
  return (
    <section className="cpn--day-info">
      <div>{data.weekday}</div>
      <div className='date-text'>{data.month}月{data.day}日</div>
      <div>
        {
          data.lastWeather.icon &&
          <img className='icon-weather' src={data.lastWeather.icon} />
        }
      </div>
      <div>{data.lastWeather.text}</div>
      <div className='temp-trend-box'>
        <div>{data.lastWeather.temp}°</div>
        <div>{data.firstWeather.temp}°</div>
      </div>
      <div className='first-weather'>
        {
          data.firstWeather.icon &&
          <img className='icon-weather' src={data.firstWeather.icon} />
        }
      </div>
      <div>{data.firstWeather.text}</div>
      <div className='windy-power-wrapper'>
        <span>
          {
            data.windy.icon &&
            <img className='icon-windy-power' src={data.windy.icon} />
          }
        </span>
        <span>{data.windy.power}级</span>
      </div>
      <div>{data.air}</div>
    </section>
  );
}

// function getPreviousDate(numOfDays, specDate = new Date()) {
//   const date = new Date(specDate);
//   date.setDate(date.getDate() - numOfDays);
//   return getDateObjectValue(date);
// }
function getNextDate(numOfDays, specDate = new Date()) {
  const date = new Date(specDate);
  date.setDate(date.getDate() + numOfDays);
  return getDateObjectValue(date);
}
function getRecent15Days() {
  const dateArr = [];
  for (let i = 1; i <= 15; i++) {
    const newDate = getNextDate(i - 2);
    const str = `${numberPaddingZero(newDate.month)}/${numberPaddingZero(newDate.day)}`;
    dateArr.push(str);
  }
  return dateArr;
}

export default function Recent15DaysTrend(props = {}) {
  const { BasePage } = window.$components;
  console.log('getRecent15Days', getRecent15Days());
  const genDayList = useCallback(() => {
    const recent15Days = getRecent15Days();
    const list = [];
    recent15Days.forEach(day => {
      const date = new Date();
      const dateObj = getDateObjectValue(new Date(`${date.getFullYear()}/${day}`));
      list.push({
        weekday: '昨天',
        month: dateObj.month,
        day: dateObj.day,
        lastWeather: {
          text: '雷阵雨',
          icon: require('../../assets/imgs/icon/icon-duoyun.svg'),
          temp: '32'
        },
        firstWeather: {
          text: '雷阵雨',
          icon: require('../../assets/imgs/icon/icon-duoyun.svg'),
          temp: '27'
        },
        windy: {
          power: 1,
          icon: require('../../assets/imgs/icon/icon-direction-arrow.svg')
        },
        air: ''
      });
    });
    return list;
  });
  const [data, setData] = useState({
    list: genDayList()
  });
  return (
    <BasePage name='Recent15DaysTrend' title='15天趋势预报'>
      <div className='day-info-wrapper'>
        {
          data.list.map((item, i) => <DayInfo data={item} key={i} />)
        }

      </div>
    </BasePage>
  );
}
