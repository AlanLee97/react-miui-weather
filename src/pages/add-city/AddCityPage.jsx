import React from 'react';
import { BasePage } from '../../components';

function SearchBar(props = {}) {
  return (
    <section className="cpn--search-bar">
      <div>
        搜索全球天气
      </div>
    </section>
  );
}

export default function AddCityPage(props = {}) {
  return (
    <BasePage name='AddCity' title="城市管理">
      <section className="page--add-city">
        <SearchBar />
      </section>
    </BasePage>
  );
}
