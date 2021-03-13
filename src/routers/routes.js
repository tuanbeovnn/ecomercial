import React from 'react';
import MobileCategories from '../components/categories/MobileCategories';
import ComparePage from '../pages/ComparePage';
import MyAccountPage from '../pages/MyAccountPage';
import SingleProductPage from '../pages/SingleProductPage';
import StorePage from '../pages/StorePage';
import TrackYourOrderPage from '../pages/TrackYourOrderPage';
import WishListPage from '../pages/WishListPage';
import Home from './../module/Home';
import Login from './../module/Login';
import Regiter from './../module/Regiter';
import AdminPage from './../components/admin/AdminPage';
import LoginPage from './../components/admin/LoginPage';
import ProductPage from '../components/admin/ProductPage';
import Categories from '../components/admin/Categories';
import LaptopCategories from '../components/categories/LaptopCategories';
import ChangePassword from '../pages/ChangePassword';

export const routes = [
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
        path: '/changepassword',
        exact: true,
        main: () => <ChangePassword/>
    },
    {
        path:'/myaccount',
        exact : false,
        main: () => <MyAccountPage/>
    },
    {
        path:'/register',
        exact : false,
        main: () => <Regiter />
    },
    {
        path:'/track',
        exact : false,
        main: () => <TrackYourOrderPage />
    },
    {
        path:'/store',
        exact : false,
        main: () => <StorePage />
    },
    {
        path:'/compare',
        exact : false,
        main: () => <ComparePage />
    },
    {
        path:'/wishlist',
        exact : false,
        main: () => <WishListPage />
    },
    {
        path:'/product/:code',
        exact : false,
        main: (props) => <MobileCategories {...props}/>
    },
    {
        path:'/laptop',
        exact : false,
        main: () => <LaptopCategories/>
    },
    {
        path:'/details/:code',
        exact : false,
        main: (props) => <SingleProductPage {...props}/>
    }
];
export const routesAdmin = [
    {
        path: '/admin',
        exact: true,
        main: () => <AdminPage />
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    },
    
    {
        path: '/products',
        exact: true,
        main: () => <ProductPage/>
    },
    {
        path: '/categories',
        exact: false,
        main: () => <Categories/>
    },
];