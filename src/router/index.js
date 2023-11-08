import React, { Suspense, lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
// import {
//   HomePage,
//   AddCityPage,
//   AQIPage,
//   ForcastPage,
//   Recent15DaysTrend,
//   SettingPage
// } from '../pages';
import { App } from '../App';
// import AddCityPage from '../pages/add-city/AddCityPage';
// import HomePage from '../pages/home/HomePage';

// const AddCityPage = lazy(() => import('../pages/add-city/AddCityPage'));

const routes = [
  {
    path: '/add-city',
    element: lazy(() => import('../pages/add-city/AddCityPage'))
  },
  {
    path: '/aqi',
    element: lazy(() => import('../pages/aqi/AQIPage'))
  },
  {
    path: '/forcast',
    element: lazy(() => import('../pages/forcast/ForcastPage'))
  },
  {
    path: '/15days-trend',
    element: lazy(() => import('../pages/recent-15-days-trend/Recent15DaysTrend'))
  },
  {
    path: '/setting',
    element: lazy(() => import('../pages/setting/SettingPage'))
  },
  {
    path: '/',
    element: lazy(() => import('../pages/home/HomePage'))
  }
];

function genRoutes(routes) {
  return routes.map(route => {
    route.element = (
      <Suspense fallback={<div>loading...</div>}>
        <App>
          {<route.element />}
        </App>
      </Suspense>
    );
    return route;
  });
}

const router = createHashRouter(genRoutes(routes));
export default router;
