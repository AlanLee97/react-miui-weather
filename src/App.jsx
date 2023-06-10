import React from 'react';
import HomePage from './pages/HomePage';
import './style.scss';

export function App (props = {}) {
  return (
    <section className="cpn--app">
      <HomePage />
    </section>
  );
}
