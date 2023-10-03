import React, { useEffect, useState, useRef } from 'react';
import { MoveInfo } from '@alanlee97/utils';
import HomePage from './pages/HomePage';
import AppContext from './context/AppContext';
import { ScrollInfo } from './utils';
import './style.scss';

export function App (props = {}) {
  const [scrollInfo, setScrollInfo] = useState({});
  const [moveInfo, setMoveInfo] = useState({});
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
  }, []);

  return (
    <section className="cpn--app" onTouchEnd={onTouchEnd}>
      <AppContext.Provider value={{ scrollInfo, moveInfo }}>
        <HomePage />
      </AppContext.Provider>
    </section>
  );
}
