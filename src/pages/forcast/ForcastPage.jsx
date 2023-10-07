import React, { useState } from 'react';
import './style.scss';

function CustomTitle(props = {}) {
  const [data, setData] = useState({
    area: '宝安区',
    address: '银田支一路'
  });
  return (
    <section className="cpn--custom-title">
      <div className='title-text'>降水预报</div>
      <div className='address-info'>
        <span className='area-text'>{data.area}</span>
        <span className='address-text'>{data.address}</span>
      </div>
    </section>
  );
}

function ForcastMap(props = {}) {
  return (
    <section className="cpn--forcast-map">
      {/* 地图显示不是本项目重点，暂时使用图片代替，后续有兴趣再开发 */}
      <img src={require('../../assets/imgs/forcast-map.jpg')} className='img-forcast-map' />
    </section>
  );
}

export default function ForcastPage(props = {}) {
  const { BasePage } = window.$components;

  return (
    <BasePage name='forcast'>
      <CustomTitle />
      <ForcastMap />
    </BasePage>
  );
}
