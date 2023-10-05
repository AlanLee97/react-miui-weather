import React, { useContext, useEffect, useRef } from 'react';
import AppContext from '../../../context/AppContext';
import './style.scss';

function IconAdd() {
  return (
    <svg t="1686385679432" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3330" width="22" height="22"><path d="M948.313043 442.991304l-369.530435 0 0-369.530435c0-37.843478-31.165217-69.008696-69.008696-69.008696-37.843478 0-69.008696 31.165217-69.008696 69.008696l0 369.530435-369.530435 0c-37.843478 0-69.008696 31.165217-69.008696 69.008696 0 37.843478 31.165217 69.008696 69.008696 69.008696l369.530435 0 0 369.530435c0 37.843478 31.165217 69.008696 69.008696 69.008696 37.843478 0 69.008696-31.165217 69.008696-69.008696l0-369.530435 369.530435 0c37.843478 0 69.008696-31.165217 69.008696-69.008696C1017.321739 474.156522 988.382609 442.991304 948.313043 442.991304z" fill="#ffffff" p-id="3331"></path></svg>
  );
}

function IconMenu() {
  return (
    <svg t="1686386107064" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8691" width="22" height="22"><path d="M625.884817 915.444987a114.027113 114.027113 0 1 0-113.837385 108.524973 111.307665 111.307665 0 0 0 113.837385-108.524973z m0-397.972334a114.027113 114.027113 0 1 0-113.837385 108.540784 111.307665 111.307665 0 0 0 113.837385-108.540784z m0-397.956522a114.027113 114.027113 0 1 0-113.837385 108.540783 111.323475 111.323475 0 0 0 113.837385-108.540783z" fill="#ffffff" p-id="8692"></path></svg>
  );
}

export default function Header(props = {}) {
  const appContext = useContext(AppContext);
  const headerBgRef = useRef();

  useEffect(() => {
    const { scrollPercent } = appContext.scrollInfo || {};
    if (headerBgRef.current) {
      headerBgRef.current.style.backgroundColor = 'cornflowerblue';
      let opacity = (0.05 * scrollPercent);
      if (opacity < 0) opacity = 0;
      if (opacity > 1) opacity = 1;
      headerBgRef.current.style.opacity = opacity;
    }
  }, [appContext]);

  return (
    <section className="cpn--header">
      <div className='header-content'>
        <div className='header-bg' ref={headerBgRef}></div>
        <div className='header-row'>
          <div className='header-item left'>
            <span onClick={() => window.$goPage('/add-city')}>
              <IconAdd />
            </span>
          </div>
          <div className='header-item center'>
            <div className='title'>宝安区 银田路</div>
            <div className='dot-row g-center-vh'>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </div>
          </div>
          <div className='header-item right'><IconMenu /></div>
        </div>
      </div>
    </section>
  );
}
