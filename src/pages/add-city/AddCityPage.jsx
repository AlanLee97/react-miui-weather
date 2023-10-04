import React, { useRef, useState } from 'react';
import './style.scss';

function SearchBar(props = {}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  const onBlur = () => {
    setFocused(false);
  };

  const showInputBox = () => {
    setFocused(true);
    window.$nextTick(() => {
      inputRef.current.focus();
    });
  };

  return (
    <section className="cpn--search-bar">
      <div className='search-box'>
        <img className='icon-search' src={require('../../assets/imgs/icon/icon-search.svg')} />
        {
          focused
            ? (
              <input ref={inputRef} className='input-box' type="text" onBlur={onBlur}/>
            )
            : (
              <div className='fake-placeholder' onClick={showInputBox}>搜索全球天气</div>
            )
        }
      </div>
    </section>
  );
}

function CityThumb(props = {}) {
  const { data = {} } = props || {};
  return (
    <section className="cpn--city-thumb">
      <div className='display-info'>
        <div>
          <div>{data.name || data.address}</div>
          <div>
            <span>空气{data.air}</span>
            <span>
              <span>{data.maxTemp}°</span>
              /
              <span>{data.minTemp}°</span>
            </span>
          </div>
        </div>
        <div>{data.temp}°</div>
      </div>
    </section>
  );
}

export default function AddCityPage(props = {}) {
  const { BasePage } = window.$components;
  const [cityList, setCityList] = useState([
    {
      name: '深圳',
      temp: 27,
      maxTemp: 31,
      minTemp: 25,
      address: '',
      air: ''
    },
    {
      name: '南山区',
      temp: 27,
      maxTemp: 31,
      minTemp: 25,
      address: '',
      air: ''
    }
  ]);
  return (
    <BasePage name='AddCity' title="城市管理">
      <section className="page--add-city">
        <SearchBar />

        <div className='city-list'>
          {
            cityList.map((city, i) => {
              return (
                <CityThumb key={'city_' + i} data={city} />
              );
            })
          }
        </div>
      </section>
    </BasePage>
  );
}
