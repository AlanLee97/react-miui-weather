import React, { useCallback, useState, useRef, useEffect } from 'react';
import { numberPaddingZero, getDateObjectValue } from '@alanlee97/utils';
import './style.scss';

const weekdayMap = {
  0: '日',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六'
};

function DayInfo(props = {}) {
  const { data = {}, slotEl, index } = props || {};
  const isCurDay = data.day === new Date().getDate();
  const isYesterday = data.weekday === '昨天';
  const className = window.$className([
    'cpn--day-info',
    isCurDay ? 'active' : ''
  ]);
  return (
    <section className={className}>
      <div>{data.weekday}</div>
      <div className='date-text'>{data.month}月{data.day}日</div>
      <div>
        {
          data.lastWeather.icon &&
          <img className='icon-weather' src={data.lastWeather.icon} />
        }
      </div>
      <div>{data.lastWeather.text}</div>
      <div className='temp-trend-box' style={index === 0 ? { alignSelf: 'flex-start' } : {}}>
        {/* <div>{data.lastWeather.temp}°</div> */}
        {
          (slotEl && index === 0) && (
            <div className='chart-posi'>
              {slotEl}
            </div>
          )
        }
        {/* <div>{data.firstWeather.temp}°</div> */}
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
        <span className='power-text'>{data.windy.power}级</span>
      </div>
      <div className={window.$className(['tag-air', data.air ? '' : 'tag-air-empty'])}>{data.air}</div>
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

function LineChart(props = {}) {
  const { data = [] } = props;
  const target = useRef(null);
  const yData1 = data.map(item => {
    const temp1 = getRandomInt(25, 28);
    const temp2 = getRandomInt(25, 28);
    return +Math.max(temp1, temp2);
  });
  const yData2 = data.map(item => {
    const temp1 = getRandomInt(24, 29);
    const temp2 = getRandomInt(18, 22);
    return +Math.min(temp1, temp2);
  });
  const xData = getRecent15Days();
  console.log('_data', { xData, yData1, yData2 });

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(target.current, null, {
      renderer: 'svg',
      width: data.length * (window.innerWidth / 5),
      height: 120
    });
    // 绘制图表
    myChart.setOption({
      grid: {
        left: 10,
        right: 10,
        top: 40,
        bottom: 30
      },
      tooltip: {
        show: false
      },
      xAxis: {
        data: xData,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        min: 'dataMin',
        max: 'dataMax'
      },
      series: [
        {
          type: 'line',
          data: yData1,
          itemStyle: {
            color: '#aaaaaa'
          },
          lineStyle: {
            color: '#bbbbbb'
          },
          // smooth: true,
          symbolSize: 6,
          label: {
            // 修改 position 和 distance 的值试试
            // 支持：'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
            position: 'top',
            distance: 4,

            show: true,
            formatter: ['{c}°'].join('\n'),
            padding: 6,
            fontSize: 18,
            color: '#000'
          }
        },
        {
          type: 'line',
          data: yData2,
          itemStyle: {
            color: '#aaaaaa'
          },
          lineStyle: {
            color: '#bbbbbb'
          },
          // smooth: true,
          symbolSize: 6,
          label: {
            // 修改 position 和 distance 的值试试
            // 支持：'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
            position: 'bottom',
            distance: 4,

            show: true,
            formatter: ['{c}°'].join('\n'),
            padding: 6,
            fontSize: 18,
            color: '#000'
          }
        }
      ]
    });
  }, [target]);
  return (
    <section className="cpn--line-chart">
      <div className='cpn--line-chart-container' ref={target}></div>
    </section>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 不含最大值，含最小值
}

export default function Recent15DaysTrend(props = {}) {
  const { BasePage } = window.$components;
  console.log('getRecent15Days', getRecent15Days());
  const date = getDateObjectValue(new Date());
  console.log('date', date);
  const genDayList = useCallback(() => {
    const recent15Days = getRecent15Days();
    const list = [];
    recent15Days.forEach((day, i) => {
      const date = new Date();
      const dateObj = getDateObjectValue(new Date(`${date.getFullYear()}/${day}`));
      const temp1 = getRandomInt(25, 28);
      const temp2 = getRandomInt(25, 28);
      list.push({
        weekday: `周${weekdayMap[dateObj.weekday]}`,
        month: dateObj.month,
        day: dateObj.day,
        lastWeather: {
          text: '雷阵雨',
          icon: require('../../assets/imgs/icon/icon-duoyun.svg'),
          temp: Math.max(temp1, temp2)
        },
        firstWeather: {
          text: '雷阵雨',
          icon: require('../../assets/imgs/icon/icon-duoyun.svg'),
          temp: Math.min(temp1, temp2)
        },
        windy: {
          power: 1,
          icon: require('../../assets/imgs/icon/icon-direction-arrow.svg')
        },
        air: i > 0 ? '优' : ''
      });
    });
    list[0].weekday = '昨天';
    list[1].weekday = '今天';
    list[2].weekday = '明天';
    return list;
  });
  const [data, setData] = useState({
    list: genDayList()
  });
  return (
    <BasePage name='Recent15DaysTrend' title='15天趋势预报'>
      <div className='day-info-wrapper'>
        {
          data.list.map((item, i) =>
            <DayInfo
              data={item}
              key={i}
              index={i}
              slotEl={<div className='line-chart-wrapper'>
                <LineChart data={data.list} />
              </div>} />)
        }

      </div>
    </BasePage>
  );
}
