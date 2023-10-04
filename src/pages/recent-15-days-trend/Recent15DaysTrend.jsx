import React from 'react';

export default function Recent15DaysTrend(props = {}) {
  const { BasePage } = window.$components;
  return (
    <BasePage name='Recent15DaysTrend' title='15天趋势预报'>
      <section className="page--recent-15-days-trend">
        15天趋势
      </section>
    </BasePage>
  );
}
