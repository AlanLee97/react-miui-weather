import React, { useState } from 'react';
import './style.scss';

export default function IconWrapper(props = {}) {
  const { width = '16px', height = '16px', className = '', style = {} } = props;
  const [styles] = useState({
    width,
    height,
    ...style
  });

  return (
    <span className={$className('cpn--icon-wrapper', className)} style={styles}>
      {props.children && props.children}
    </span>
  );
}
