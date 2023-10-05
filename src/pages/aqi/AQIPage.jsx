import React, { useEffect, useState } from 'react';
import { Canvas, Chart, Interval, Tooltip, Axis, ScrollBar, Line, Point } from '@antv/f2';
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
        <DrawChartTime visible={viewType === 1} />
        <DrawChartLine visible={viewType === 2} />
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

function DrawChartTime(props = {}) {
  const { visible = true } = props || {};
  useEffect(() => {
    draw();
  }, []);

  function draw() {
    const data = [
      {
        hour: '10:00',
        value: 38
      },
      {
        hour: '11:00',
        value: 12
      },
      {
        hour: '12:00',
        value: 64
      },
      {
        hour: '13:00',
        value: 16
      },
      {
        hour: '14:00',
        value: 72
      },
      {
        hour: '15:00',
        value: 64
      },
      {
        hour: '16:00',
        value: 66
      },
      {
        hour: '17:00',
        value: 38
      },
      {
        hour: '18:00',
        value: 12
      },
      {
        hour: '19:00',
        value: 64
      },
      {
        hour: '20:00',
        value: 16
      },
      {
        hour: '21:00',
        value: 72
      },
      {
        hour: '22:00',
        value: 64
      },
      {
        hour: '23:00',
        value: 66
      }
    ];

    const context = document.getElementById('container-time').getContext('2d');
    const width = window.innerWidth - 40;
    const { props } = (
      <Canvas width={width} height={180} context={context} pixelRatio={window.devicePixelRatio}>
        <Chart
          data={data}
          scale={{
            value: {
              tickCount: 5
            }
          }}
        >
          <Axis field="hour" />
          <Interval style={{
            fill: '#5adda6',
            shadowColor: '#5adda6',
            shadowBlur: 2
          }} x="hour" y="value" />
          <ScrollBar visible={false} mode="x" range={[0, 0.4]} />
          <Tooltip />
        </Chart>
      </Canvas>
    );

    const chart = new Canvas(props);
    chart.render();
  }

  const className = [
    'cpn--draw-chart',
    visible ? '' : 'g-undisplay'
  ];

  return (
    <section className={window.$className(className)}>
      <canvas id='container-time'></canvas>
    </section>
  );
}

function DrawChartLine(props = {}) {
  const { visible = true } = props || {};
  useEffect(() => {
    draw();
  }, []);

  function draw() {
    const data = [
      {
        date: '10月5日',
        value: 20
      },
      {
        date: '10月6日',
        value: 22
      },
      {
        date: '10月7日',
        value: 21
      },
      {
        date: '10月8日',
        value: 23
      },
      {
        date: '10月9日',
        value: 20
      },
      {
        date: '10月10日',
        value: 22
      },
      {
        date: '10月11日',
        value: 22
      },
      {
        date: '10月12日',
        value: 23
      },
      {
        date: '10月13日',
        value: 22
      },
      {
        date: '10月14日',
        value: 22
      },
      {
        date: '10月15日',
        value: 21
      },
      {
        date: '10月16日',
        value: 23
      }
    ];

    const context = document.getElementById('container-line').getContext('2d');
    const width = window.innerWidth - 40;
    const { props } = (
      <Canvas width={width} height={180} context={context} pixelRatio={window.devicePixelRatio}>
        <Chart
          data={data}
        >
          <Axis field="date" />
          <Line x="date" y="value" style={{
            stroke: '#eeeeee'
          }} />
          <Point x="date" y="value" style={{
            fill: '#5adda6'
          }} />
          <ScrollBar visible={false} mode="x" range={[0, 0.4]} />
          <Tooltip />
        </Chart>
      </Canvas>
    );

    const chart = new Canvas(props);
    chart.render();
  }

  const className = [
    'cpn--draw-chart',
    visible ? '' : 'g-undisplay'
  ];

  return (
    <section className={window.$className(className)}>
      <canvas id='container-line'></canvas>
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
