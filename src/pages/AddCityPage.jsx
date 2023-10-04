import React from 'react';
import { BasePage } from '../components';

export default function AddCityPage(props = {}) {
  return (
    <BasePage name='AddCity' title="城市管理">
      <section className="page--add-city">
        添加城市
      </section>
    </BasePage>
  );
}
