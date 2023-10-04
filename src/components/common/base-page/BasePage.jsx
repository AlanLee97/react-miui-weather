import React from 'react';
import { toKebabString } from '../../../utils';
import { PageHeader } from '../../../components';
import './style.scss';

export default function BasePage(props = {}) {
  const { name, title } = props || {};
  return (
    <section className={window.$className(['cpn--base-page g-page', name ? `page--${toKebabString(name)}` : ''])}>
      <PageHeader />
      {title && (
        <div className='page-title'>{title}</div>
      )}
      <div className='page-content'>
        {props.children}
      </div>
    </section>
  );
}
