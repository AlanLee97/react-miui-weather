import React, { useRef, useState } from 'react';
import { WeatherBg } from '../../components';
import './style.scss';

function SearchBar(props = {}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  const showInputBox = () => {
    setFocused(true);
    window.$nextTick(() => {
      inputRef.current.focus();
      if (props.onFocus) {
        props.onFocus();
      }
    });
  };

  const quitInput = () => {
    setFocused(false);
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const className = [
    'cpn--search-bar',
    focused ? 'input-mode' : ''
  ];

  return (
    <section className={window.$className(className)}>
      <div className='search-box'>
        <img className='icon-search' src={require('../../assets/imgs/icon/icon-search.svg')} />
        {
          focused
            ? (
              <input ref={inputRef} className='input-box' type="text"/>
            )
            : (
              <div className='fake-placeholder' onClick={showInputBox}>搜索全球天气</div>
            )
        }
      </div>
      {
        focused && (
          <div className='btn-cancel' onClick={quitInput}>取消</div>
        )
      }
    </section>
  );
}

function CityThumb(props = {}) {
  const { data = {} } = props || {};
  return (
    <section className="cpn--city-thumb" onClick={() => window.$goPage('/')}>
      <WeatherBg portal={false} />
      <div className='display-info'>
        <div>
          <div className='city-name'>{data.name || data.address}</div>
          <div className='air-text-wrapper'>
            <span className='aqi-text'>空气{data.air}</span>
            <span>
              <span>{data.maxTemp}°</span>
              <span className='temp-split'>/</span>
              <span>{data.minTemp}°</span>
            </span>
          </div>
        </div>
        <div className='temp-text'>{data.temp}°</div>
      </div>
    </section>
  );
}

function SearchCityPanel(props = {}) {
  const { visible } = props || {};
  const className = [
    'cpn--search-city-panel',
    visible ? '' : 'g-undisplay'
  ];

  const [hotCitys, setHotCitys] = useState([
    {
      code: 0,
      name: '定位'
    },
    {
      code: 1,
      name: '北京市'
    },
    {
      code: 2,
      name: '上海市'
    },
    {
      code: 3,
      name: '广州市'
    },
    {
      code: 4,
      name: '深圳市'
    }
  ]);

  const [curCity, setCurCity] = useState({});

  return (
    <section className={window.$className(className)}>
      <div className='city-panel-title'>热门城市</div>
      <div className='hot-citys'>
        {
          hotCitys.map((city, i) => {
            return (
              <div className={window.$className(['city-box', (curCity.code === city.code || city.code === 0) ? 'active-city' : ''])}
                key={'hot_city_' + i}>
                {city.name}
              </div>
            );
          })
        }
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
      air: '优'
    },
    {
      name: '南山区',
      temp: 27,
      maxTemp: 31,
      minTemp: 25,
      address: '',
      air: '优'
    }
  ]);
  const [searchCityPanelVisible, setSearchCityPanelVisible] = useState(false);

  const onFocusSearchBar = () => {
    setSearchCityPanelVisible(true);
  };

  const onBlurSearchBar = () => {
    setSearchCityPanelVisible(false);
  };

  return (
    <BasePage name='AddCity' title="城市管理">
      <section className="page--add-city">
        <SearchBar onFocus={onFocusSearchBar} onBlur={onBlurSearchBar} />

        <SearchCityPanel visible={searchCityPanelVisible} />

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
