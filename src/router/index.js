import React, { Suspense, lazy } from 'react';
import { createHashRouter } from 'react-router-dom';
import { App } from '../App';
import { Loading } from '../components';

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
      <Suspense fallback={<Loading />}>
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
