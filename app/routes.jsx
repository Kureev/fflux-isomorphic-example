'use strict';

import React from 'react';
import Router, { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import Layout from './components/layout.jsx';
import ListItemsContainer from './components/listItemsContainer.jsx';
import NotFound from './components/notFound.jsx';
import Wishlist from './components/wishlist.jsx';

const routes = (
    <Route name="listItems" path="/" handler={Layout}>
        <DefaultRoute name="index" handler={ListItemsContainer} />
        <Route name="wishlist" path="wishlist" handler={Wishlist} />
        <NotFoundRoute name="notfound" handler={NotFound} />
    </Route>
);

export default routes;