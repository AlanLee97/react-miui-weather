import React from 'react';
import './style.scss';
import { paddingZero } from '../../utils';

function WindInfo(props = {}) {
  return (
    <section className='cpn--wind-info'>
      <div className='wind-info-item-left'>
        <div>西风</div>
        <div>1级</div>
      </div>
      <div className='wind-info-item-right'>
        <div className='direction-circle'>
          <span className='dir-east'>东</span>
          <span className='dir-south'>南</span>
          <span className='dir-west'>西</span>
          <span className='dir-north'>北</span>
          <img className='icon-long-arrow' src={require('../../assets/imgs/icon/icon-long-arrow.svg')} alt="" />
        </div>
      </div>
    </section>
  );
}

function SunInfo(props = {}) {
  return (
    <section className='cpn--sun-info'>
      <div className='sun-info-item-left'>
        <div className='sun-time'>05:39<span className='sun-desc'>日出</span></div>
        <div className='sun-time'>19:07<span className='sun-desc'>日落</span></div>
      </div>
      <div className='sun-info-item-right'>日落线</div>
    </section>
  );
}

function FeelingInfo(props = {}) {
  // const { data } = props;
  const data = [
    {
      label: '湿度',
      value: '87%'
    },
    {
      label: '体感',
      value: '27°'
    },
    {
      label: '紫外线',
      value: '7'
    },
    {
      label: '气压',
      value: '996hPa'
    }
  ];
  return (
    <section className='cpn--feeling-info'>
      {
        data.map((item, i) => (
          <div className='feeling-item' key={`${i}_${item.label}`}>
            <span className='feeling-item-label'>{item.label}</span>
            <span className='feeling-item-value'>{item.value}</span>
          </div>
        ))
      }
    </section>
  );
}

export default function OtherInfo(props = {}) {
  return (
    <section className="cpn--other-info">
      <div className='other-info-item-left'>
        <WindInfo />
        <SunInfo />
      </div>
      <div className='other-info-item-right'>
        <FeelingInfo />
      </div>
    </section>
  );
}
