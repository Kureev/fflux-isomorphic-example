'use strict';

import Application from 'fflux/src/Application';
import ListStore from './stores/list';
import WishlistStore from './stores/wishlist';

import listActions from './actions/list';
import wishlistActions from './actions/wishlist';

/**
 * Create application
 *
 * @type {Application}
 * @description Create application instance.
 * It'll be used as isomorphic container for
 * the whole application
 */

export default () =>
    new Application({
        stores: {
            'list': new ListStore(),
            'wishlist': new WishlistStore()
        },
        actions: {
            'list': listActions,
            'wishlist': wishlistActions
        }
    });