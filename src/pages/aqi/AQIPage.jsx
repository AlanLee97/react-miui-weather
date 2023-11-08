import React, { useEffect, useState, useRef } from 'react';
import { getDateObjectValue } from '@alanlee97/utils';
import './style.scss';

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from 'echarts/charts';
import { SVGRenderer } from 'echarts/renderers';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';

echarts.use([
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  SVGRenderer
]);

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
        <GraphBar visible={viewType === 1} />
        <GraphLine visible={viewType === 2} />
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
          {/* 暂时使用图片代替地图，地图不是本项目的重点，后续有兴趣再继续开发 */}
          <img className='img-map' src={require('../../assets/imgs/aqi-map.png')} alt="" />
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

function numberPaddingZero(n) {
  if (+n < 10) {
    return '0' + n;
  }
  return n;
}

function create24Hour() {
  const date = getDateObjectValue();
  const arr = [`${date.hour}:00`, '现在'];
  let hour = date.hour;
  for (let i = 1; i <= 22; i++) {
    hour = +hour + 1;
    if (+hour < 10) {
      hour = numberPaddingZero(+hour);
    } else if (hour > 23) {
      hour = numberPaddingZero(0);
    }
    arr.push(`${hour}:00`);
  }
  return arr;
}

function GraphBar(props = {}) {
  const { visible = false } = props || {};
  const target = useRef(null);
  const [data, setData] = useState(create24Hour());
  const create24HourValue = () => {
    const arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push(Math.round(Math.random() * 50));
    }
    return arr;
  };
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(target.current, null, { renderer: 'svg', width: data.length * 50 });
    // 绘制图表
    myChart.setOption({
      grid: {
        left: 0,
        right: 0,
        top: '20px',
        bottom: '20px'
      },
      tooltip: {},
      xAxis: {
        data,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
        }
      },
      series: [
        {
          type: 'bar',
          data: create24HourValue(),
          itemStyle: {
            color: '#5adda6'
          }
        }
      ]
    });
  }, [target, data]);

  const className = [
    'cpn--graph-bar',
    visible ? '' : 'g-undisplay'
  ];

  return (
    <section className={window.$className(className)}>
      <div className='cpn--graph-bar-container' ref={target}></div>
    </section>
  );
}

function getNextDate(numOfDays, specDate = new Date()) {
  const date = new Date(specDate);
  date.setDate(date.getDate() + numOfDays);
  return getDateObjectValue(date);
}
function getRecent15Days() {
  const dateArr = [];
  for (let i = 1; i <= 15; i++) {
    const newDate = getNextDate(i - 1);
    const str = `${newDate.month}月${newDate.day}日`;
    dateArr.push(str);
  }
  dateArr[0] = '今天';
  dateArr[1] = '明天';
  return dateArr;
}

function GraphLine(props = {}) {
  const { visible = false } = props || {};
  const target = useRef(null);
  const [data, setData] = useState(getRecent15Days());
  const create15DayValue = () => {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push(Math.round(Math.random() * 50));
    }
    return arr;
  };
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(target.current, null, {
      renderer: 'svg',
      width: data.length * 55,
      height: 180
    });
    // 绘制图表
    myChart.setOption({
      grid: {
        left: 0,
        right: 0,
        top: '20px',
        bottom: '20px'
      },
      tooltip: {},
      xAxis: {
        data,
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        axisLabel: {
          show: false
        }
      },
      series: [
        {
          type: 'line',
          data: create15DayValue(),
          itemStyle: {
            color: '#5adda6'
          },
          lineStyle: {
            color: '#eeeeee'
          }
        }
      ]
    });
  }, [target]);

  const className = [
    'cpn--graph-line',
    visible ? '' : 'g-undisplay'
  ];

  return (
    <section className={window.$className(className)}>
      <div className='cpn--graph-line-container' ref={target}></div>
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
