import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MoveInfo } from '@alanlee97/utils';
import { ScrollInfo } from './utils';
import { BasePage } from './components';
import AppContext from './context/AppContext';
import './style.scss';

export function App (props = {}) {
  const [scrollInfo, setScrollInfo] = useState({});
  const [moveInfo, setMoveInfo] = useState({});

  const location = useLocation();
  const isScrollingToBottom = useRef(false);

  const onScroll = e => {
    const { scrollY, scrollHeight, atTop, atBottom, scrollPercent, event } = e;
    setScrollInfo({
      scrollY, scrollHeight, atTop, atBottom, scrollPercent, event
    });
  };

  const onTouchEnd = (e) => {
    const { scrollPercent, scrollHeight, event } = scrollInfo || {};
    const { moveY } = moveInfo || {};
    if (scrollPercent > 15 && !isScrollingToBottom.current && moveY < 0) {
      isScrollingToBottom.current = true;

      event.target.scrollTo({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
      isScrollingToBottom.current = false;
    }
  };

  const navigate = useNavigate();

  const register = useCallback(() => {
    // 定义全局函数
    window.$register('goPage', navigate);
    window.$register('goBack', () => navigate('..', { relative: 'path' }));

    // 定义全局组件
    window.$register('components', {
      BasePage
    });
  });
  register();

  useEffect(() => {
    const scrollInfo = new ScrollInfo({
      target: document.getElementById('home'),
      onScroll
    });

    const moveInfo = new MoveInfo({});
    setMoveInfo(moveInfo);

    return () => {
      scrollInfo && scrollInfo.destroy();
      moveInfo && moveInfo.destroy();
    };
  }, [location]);

  return (
    <section className="cpn--app" onTouchEnd={onTouchEnd}>
      <AppContext.Provider value={{ scrollInfo, moveInfo }}>
        {props.children}
      </AppContext.Provider>
    </section>
  );
}
