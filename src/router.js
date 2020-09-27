import React from 'react';
import demo from './components/demo';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <demo />
    },
    {
        path: '',
        exact: false,
        main: () => <demo />
    }
]

export default routes;