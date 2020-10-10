import React from 'react';
import ProductActionPage from './components/ProductActionPage/ProductActionPage';
import Home from './pages/HomePage/HomePage';
import NotFound from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
]

export default routes;