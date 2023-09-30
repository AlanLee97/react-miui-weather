import React, { useState } from 'react';
import { SlidePanel } from '..';
import TipPanelContent from './TipPanelContent';
import './style.scss';

function ListItem(props = {}) {
  const { data = {} } = props;
  return (
    <section className='cpn--tips-list-item g-center' {...props}>
      <img className='icon-tips' src={data.icon} alt={data.title} />
      <div className='tips-title'>{data.title}</div>
    </section>
  );
}

const getData = () => {
  return [
    {
      icon: require('../../assets/imgs/icon/icon-tips-cloth.svg'),
      title: '适宜衬衫'
    },
    {
      icon: require('../../assets/imgs/icon/icon-tips-cloth.svg'),
      title: '适宜衬衫'
    },
    {
      icon: require('../../assets/imgs/icon/icon-tips-cloth.svg'),
      title: '适宜衬衫'
    },
    {
      icon: require('../../assets/imgs/icon/icon-tips-cloth.svg'),
      title: '适宜衬衫'
    },
    {
      icon: require('../../assets/imgs/icon/icon-tips-cloth.svg'),
      title: '适宜衬衫'
    },
    {
      icon: require('../../assets/imgs/icon/icon-tips-cloth.svg'),
      title: '适宜衬衫'
    }
  ];
};

export default function TipsList(props = {}) {
  const [list, setList] = useState(getData());
  const [showPanel, setShowPanel] = useState(false);

  const onClickItem = (i) => {
    console.log(i);
    setShowPanel(false);

    setTimeout(() => {
      setShowPanel(true);
    });
  };

  return (
    <section className='cpn--tips-list g-module-box'>
      {
        list.map((data, i) => {
          return <ListItem data={data} key={i} onClick={() => onClickItem(i)} />;
        })
      }

      {
        showPanel
          ? (
            <SlidePanel close={() => setShowPanel(false)}>
              <TipPanelContent />
            </SlidePanel>
          )
          : null
      }

    </section>
  );
}
