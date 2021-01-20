import React from 'react';
import Home from './module/Home';
import Login from './module/Login';
import Regiter from './module/Regiter';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path:'/login',
        exact : false,
        main: () => <Login />
    },
    {
        path:'/register',
        exact : false,
        main: () => <Regiter />
    }
];

export default routes;