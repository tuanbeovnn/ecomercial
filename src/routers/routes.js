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
import ForgetPassword from '../module/ForgetPassword';
import ChangePassword from '../module/ChangePassword';
import Checkout from '../components/products/Checkout';
import BestDealsPage from '../pages/BestDealsPage';
import TemplateAdmin from '../components/chat/TemplateAdmin';
import SearchProduct from '../components/search/SearchProduct';
import AboutusPage from '../pages/AboutusPage';
import ContactPage from '../pages/ContactPage';
import TermCondition from '../pages/TermCondition';
import FaqPage from '../pages/FaqPage';
import Users from '../components/admin/Users';
import Brands from '../components/admin/Brands';
import BrandPage from '../pages/BrandPage';
import CategoryByBrand from '../pages/CategoryByBrand';

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
        path:'/product/:code/:page?',
        exact : false,
        main: (props) => <MobileCategories {...props}/>
    },
    {
        path:'/details/:code',
        exact : false,
        main: (props) => <SingleProductPage {...props}/>
    },
    {
        path:'/forgot',
        exact : false,
        main: ()=> <ForgetPassword/>
    },
    {
        path:'/changePassword',
        exact : false,
        main: ()=> <ChangePassword/>
    },
    {
        path:'/checkout',
        exact : false,
        main: ()=> <Checkout/>
    },
    {
        path:'/bestdeal-page',
        exact : false,
        main: ()=> <BestDealsPage/>
    },
    {
        path:'/search',
        exact : false,
        main: (props) => <SearchProduct {...props}/>
    },
    {
        path:'/about',
        exact : false,
        main: () => <AboutusPage/>
    },
    {
        path:'/contact',
        exact : false,
        main: () => <ContactPage/>
    },
    {
        path:'/term',
        exact : false,
        main: () => <TermCondition/>
    },
    {
        path:'/faq',
        exact : false,
        main: () => <FaqPage/>
    },
    {
        path:'/listBrand/:id/:page?',
        exact : false,
        main: (props) => <BrandPage {...props}/>
    },
    {
        path:'/code/:category?/:brand?/:page?',
        exact : false,
        main: (props) => <CategoryByBrand {...props}/>
    }

    
];
export const routesAdmin = [
    {
        path: '/',
        exact: true,
        main: () => <ProductPage />
    },
    {
        path: '/login',
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: '/products/:page?',
        exact: true,
        main: (props) => <ProductPage {...props}/>
    },
    {
        path: '/categories',
        exact: false,
        main: () => <Categories/>
    },
    {
        path: '/brands',
        exact: false,
        main: () => <Brands/>
    },
    {
        path:'/chat-box',
        exact : false,
        main: ()=> <TemplateAdmin/>
    },
    {
        path:'/users',
        exact : false,
        main: ()=> <Users/>
    }
];