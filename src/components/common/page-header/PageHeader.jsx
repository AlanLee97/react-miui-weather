import React from 'react';
import './style.scss';

export default function PageHeader(props = {}) {
  const { title } = props || {};
  return (
    <section className='cpn--page-header'>
      <div className='page-header-item page-header-left'>
        <img className='icon-back'
          src={require('../../../assets/imgs/icon/icon-arrow-down.svg')}
          onClick={() => window.$goBack()} />
      </div>
      <div className='page-header-item page-header-center'>
        {title}
      </div>
      <div className='page-header-item page-header-right'>

      </div>
    </section>
  );
}
