'use strict';

import Application from 'fflux/src/Application';
import ListStore from './stores/list';

import listActions from './actions/list';

/**
 * Create application
 *
 * @type {Application}
 * @description Create application instance.
 * It'll be used as isomorphic container for
 * the whole application
 */
var app = new Application({
    stores: {
        'list': new ListStore()
    },
    actions: {
        'list': listActions
    }
});

export default app;