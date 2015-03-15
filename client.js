'use strict';
 
import React from 'react';
import { run as runRouter, HistoryLocation } from 'react-router';
import routes from './app/routes';
 
const contentEl = document.getElementById('content');

runRouter(routes, HistoryLocation, function(Handler, state) {
    React.render(<Handler data={window.__DATA__}/>, contentEl);
});