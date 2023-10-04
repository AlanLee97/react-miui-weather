import React from 'react';

export default function ForcastPage(props = {}) {
  const { BasePage } = window.$components;
  return (
    <BasePage name='forcast' title='降雨预报'>
      <section className="page--forcast">
        降雨预报
      </section>
    </BasePage>
  );
}
