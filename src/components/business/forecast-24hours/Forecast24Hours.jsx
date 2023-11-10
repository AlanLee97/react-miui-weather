import React, { useEffect, useRef, useState } from 'react';
import './style.scss';
import { numberPaddingZero, getDateObjectValue } from '@alanlee97/utils';

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
// import * as echarts from 'echarts/core';
// // 引入柱状图图表，图表后缀都为 Chart
// import { LineChart } from 'echarts/charts';
// import { SVGRenderer } from 'echarts/renderers';
// // 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent
// } from 'echarts/components';

// echarts.use([
//   LineChart,
//   TitleComponent,
//   TooltipComponent,
//   GridComponent,
//   SVGRenderer
// ]);

function createData() {
  const arr = [];
  const h = new Date().getHours();
  for (let i = 0; i < 24; i++) {
    arr.push({
      icon: require('../../../assets/imgs/icon/icon-qing.svg'),
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
      {/* <span className='temp'>{data.temp}</span> */}
      <span className='icon-wrapper g-center-vh'>{data.icon && <img className='icon' src={data.icon} alt="icon" />}</span>
      <span className='wind-level'>{data.windLevel}</span>
      <span className='air-level g-center-vh'>{data.airLevel}</span>
      <span>{data.hour}</span>
    </section>
  );
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // 不含最大值，含最小值
}

function TrendChart(props = {}) {
  const { data = [] } = props;
  const target = useRef(null);

  const create24HourValue = () => {
    const arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push(getRandomInt(20, 30));
    }
    return arr;
  };
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(target.current, null, {
      renderer: 'svg',
      width: data.length * 55,
      height: 80
    });
    // 绘制图表
    myChart.setOption({
      grid: {
        left: 10,
        right: 10,
        top: 0,
        bottom: 0
      },
      tooltip: {
        show: false
      },
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
        inverse: true,
        type: 'value',
        splitLine: {
          show: false
        }
      },
      series: [
        {
          type: 'line',
          data: create24HourValue(),
          itemStyle: {
            color: 'transparent'
          },
          lineStyle: {
            color: '#f9c01a'
          },
          smooth: true,
          symbolSize: 0,
          label: {
            // 修改 position 和 distance 的值试试
            // 支持：'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
            position: 'top',
            distance: 10,

            show: true,
            formatter: ['{c}°'].join('\n'),
            padding: 10,
            fontSize: 18,
            color: '#fff'
          }
        }
      ]
    });
  }, [target]);

  return (
    <section className='cpn--trend-chart'>
      <div className='cpn--trend-chart-container' ref={target}></div>
    </section>
  );
}

export default function Forecast24Hours(props = {}) {
  const dataList = data.dataList;
  const [hourData, setHourData] = useState(create24Hour());
  const containerWidth = hourData.length * 55;

  return (
    <section className="cpn--forecast-24hours">
      <div className='module-title'>
        <img className='icon' src={require('../../../assets/imgs/icon/icon-clock.svg')} alt="" />
        24小时预报
      </div>

      <div className='info-wrapper'>
        <TrendChart data={hourData} />
        <div className='item-wrapper' style={{ width: containerWidth + 'px' }}>
          {
            dataList.map((data, index) => <Forecast24HoursItem data={data} key={ 'ThumbDaysInfoItem_' + index} />)
          }
        </div>

      </div>
    </section>
  );
}
