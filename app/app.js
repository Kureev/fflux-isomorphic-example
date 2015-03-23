'use strict';

import Application from 'fflux/src/Application';
import ListStore from './stores/list';

var app = new Application();

app.stores()
    .register('list', new ListStore());

export default app;