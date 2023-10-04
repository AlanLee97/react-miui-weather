import React from 'react';

export default function AQIPage(props = {}) {
  const { BasePage } = window.$components;
  return (
    <BasePage name="aqi" title='空气质量'>
      <section className="page--aqi">
        空气质量
      </section>
    </BasePage>
  );
}
