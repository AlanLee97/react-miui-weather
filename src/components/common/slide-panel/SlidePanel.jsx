import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { MoveInfo } from '@alanlee97/utils';
import './style.scss';

export default function SlidePanel(props = {}) {
  const { children, close } = props;
  const panel = useRef();
  const moveInfo = useRef();
  useEffect(() => {
    initMoveHandler();
    return () => {
      moveInfo.current && moveInfo.current.destroy();
    };
  }, []);

  const initMoveHandler = () => {
    const panelEl = panel.current;
    panelEl.classList.add('slide-transition');
    panelEl.style.top = `${window.innerHeight / 2}px`;
    moveInfo.current = new MoveInfo({
      ceil: panelEl.getBoundingClientRect().height,
      onStart: () => {
        panelEl.classList.remove('slide-transition');
      },
      onMove: ({ y, moveY }) => {
        if (y >= moveInfo.current.floor) {
          onClickBlank();
        }
        if (panelEl) {
          if (Math.abs(moveY) <= 2) return;
          panelEl.style.top = `${y}px`;
        }
      },
      onEnd: ({ y }) => {
        if (y + (window.innerHeight * 0.25) > window.innerHeight) {
          hide();
          onClickBlank();
        } else {
          panelEl.style.top = `${window.innerHeight / 2}px`;
          panelEl.classList.add('slide-transition');
        }
      }
    });
  };

  const onClickBlank = () => {
    hide();
    setTimeout(() => {
      close && close();
    }, 180);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const onTransitionEnd = (e) => {
    const panelEl = panel.current;
    panelEl.classList.remove('slide-transition');
  };

  const hide = () => {
    const panelEl = panel.current;
    panelEl.classList.add('slide-transition');
    panelEl.style.top = `${window.innerHeight}px`;
  };

  return createPortal((
    <section className="cpn--slide-panel" onClick={onClickBlank}>
      <div className='slide-panel' ref={panel} onClick={stopPropagation} onTransitionEnd={onTransitionEnd}>
        <div className="bar-wrapper"><span className="bar"></span></div>
        {children}
      </div>

    </section>
  ), document.body);
}
