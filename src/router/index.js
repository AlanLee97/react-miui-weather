import React from 'react';
import { createHashRouter } from 'react-router-dom';
import {
  HomePage,
  AddCityPage,
  AQIPage,
  ForcastPage,
  Recent15DaysTrend,
  SettingPage
} from '../pages';
import { App } from '../App';

const routes = [
  {
    path: '/add-city',
    element: <AddCityPage />
  },
  {
    path: '/aqi',
    element: <AQIPage />
  },
  {
    path: '/forcast',
    element: <ForcastPage />
  },
  {
    path: '/15days-trend',
    element: <Recent15DaysTrend />
  },
  {
    path: '/setting',
    element: <SettingPage />
  },
  {
    path: '/',
    element: <HomePage />
  }
];

function genRoutes(routes) {
  return routes.map(route => {
    route.element = <App>
      {route.element}
    </App>;
    return route;
  });
}

const router = createHashRouter(genRoutes(routes));
export default router;
