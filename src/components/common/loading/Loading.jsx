import React from 'react';
import './style.scss';

function IconLoading(props = {}) {
  return (
    <section className="cpn--icon-loading">
      <svg t="1700407613471" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29720" width="32" height="32"><path d="M896.384 512H896a384 384 0 0 0-376.896-383.936A32 32 0 0 1 512 64.512V64a448 448 0 0 1 448 442.88 32 32 0 1 1-63.616 5.12z" fill="#dbdbdb" p-id="29721"></path></svg>
    </section>
  );
}

export default function Loading(props = {}) {
  return (
    <section className="cpn--loading">
      <IconLoading />
    </section>
  );
}
