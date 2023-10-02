import React from 'react';
import './style.scss';

export default function FooterText(props = {}) {
  return (
    <section className="cpn--footer-text">
      部分气象数据来自<span>彩云天气</span>
    </section>
  );
}
