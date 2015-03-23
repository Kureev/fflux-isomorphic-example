'use strict';

import ImmutableStore from 'fflux/src/ImmutableStore';

class ListStore extends ImmutableStore {
    constructor() {
        this.actions = {
            'LIST_FETCHED': 'listFetched'
        };
    }

    listFetched(payload) {
        this.setState({
            items: payload
        });
    }

    getItems() {
        const state = this.getState();
        if (state) {
            return state.toJSON().items;
        } else {
            return [];
        }
    }
}

export default ListStore;