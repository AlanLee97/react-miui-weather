import './style.scss';
import React from 'react';
import img from '@imgs/bg.jpg';

export default function Hello(props = {}) {
  return (
    <div className="cpn--hello">
      Hello
      <img src={img} alt="" srcSet="" />
    </div>
  );
}
