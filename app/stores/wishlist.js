'use strict';

import ImmutableStore from 'fflux/src/ImmutableStore';

/**
 * Wishlist store
 *
 * Will be used for storing wishlist data.
 * Also export `getItems` method for easy access
 * to store's items
 */

class WishlistStore extends ImmutableStore {
    /**
     * WishlistStore constructor
     * @description Call parent constructor
     * and specify handler for ITEM_STORED action
     * @constructor
     * @return {Void}
     */
    constructor() {
        super();

        this.actions = {
            'WISHLIST_FETCHED': 'wishlistFetched',
            'ITEM_STORED': 'itemStored'
        };
    }

    /**
     * Get initial state of the store
     * @return {Object}
     */
    getInitialState() {
        return {
            items: []
        };
    }

    /**
     * Item store action handler
     * @param  {Object} items
     * @return {Void}
     */
    itemStored(item) {
        this.replaceState({
            items: this.getState().get('items').push(item)
        });
    }

    wishlistFetched(items) {
        this.replaceState({
            items: items
        });
    }

    /**
     * Get array of items
     * @return {Array}
     */
    getItems() {
        return this.getState().toJSON().items;
    }
}

export default WishlistStore;