'use strict';

import React from 'react';
import { run as runRouter, HistoryLocation } from 'react-router';
import routes from './app/routes';
import Wishlist from './app/app';

const contentEl = document.getElementById('content');

var app = new Wishlist();

if (window.__DATA__.length) {
    app.stores().rehydrate(window.__DATA__);
}

runRouter(routes, HistoryLocation, function(Handler, state) {
    React.render(<Handler app={app} />, contentEl);
});