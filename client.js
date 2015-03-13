'use strict';
 
import React from 'react';
import { run as runRouter, HistoryLocation } from 'react-router';
import routes from './app/routes';
 
const contentEl = document.getElementById('content');

runRouter(routes, HistoryLocation, Handler =>
  React.render(<Handler />, contentEl)
);