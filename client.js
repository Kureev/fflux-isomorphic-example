'use strict';
 
import React from 'react';
import { run as runRouter, HistoryLocation } from 'react-router';
import routes from './app/routes';
import app from './app/app';
 
const contentEl = document.getElementById('content');

runRouter(routes, HistoryLocation, function(Handler, state) {
    if (window.__DATA__.length) {
        app.stores().rehydrate(window.__DATA__);
    }

    React.render(<Handler app={app} />, contentEl);
});