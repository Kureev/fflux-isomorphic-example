'use strict';

import ImmutableStore from 'fflux/src/ImmutableStore';

/**
 * List store
 *
 * Will be used for storing all list-related data.
 * Also export `getItems` method for easy access
 * to store's items
 */

class ListStore extends ImmutableStore {
    /**
     * ListStore constructor
     * @description Call parent constructor
     * and specify handler for LIST_FETCHED action
     * @constructor
     * @return {Void}
     */
    constructor() {
        super();

        this.actions = {
            'LIST_FETCHED': 'listFetched'
        };
    }

    /**
     * Get initial state of the store
     * @return {Object}
     */
    getInitialState() {
        return {};
    }

    /**
     * List fetched action handler
     * @param  {Array} items
     * @return {Void}
     */
    listFetched(items) {
        this.setState({
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

export default ListStore;