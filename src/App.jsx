import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MoveInfo, ScrollInfo } from '@alanlee97/utils';
import { BasePage } from './components';
import AppContext from './context/AppContext';
import './style.scss';

export function App (props = {}) {
  const [scrollInfo, setScrollInfo] = useState({});
  const [moveInfo, setMoveInfo] = useState({});
  const [scrollY, setScrollY] = useState(0);

  const location = useLocation();
  const isScrollingToBottom = useRef(false);

  const onTouchEnd = (e) => {
    const { scrollPercent } = scrollInfo || {};
    const { moveY } = moveInfo || {};
    if (scrollPercent > 15 && !isScrollingToBottom.current && moveY < 0) {
      isScrollingToBottom.current = true;

      scrollInfo.scrollToBottom();
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
      onScroll: ({ scrollY }) => {
        // 为了触发AppContext的变化
        setScrollY(scrollY);
      }
    });
    setScrollInfo(scrollInfo);

    const moveInfo = new MoveInfo({});
    setMoveInfo(moveInfo);

    return () => {
      scrollInfo && scrollInfo.destroy();
      moveInfo && moveInfo.destroy();
    };
  }, [location]);

  return (
    <section className="cpn--app" onTouchEnd={onTouchEnd}>
      <AppContext.Provider value={{ scrollInfo, moveInfo, scrollY }}>
        {props.children}
      </AppContext.Provider>
    </section>
  );
}
