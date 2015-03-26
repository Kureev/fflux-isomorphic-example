'use strict';

import React from 'react';
import ListItems from './listItems';

const Wishlist = React.createClass({
    statics: {
        fetchData: (app) => {
            return app.actions()
                .get('wishlist')
                .fetch();
        }
    },

    componentWillMount() {
        const app = this.props.app;

        app.stores()
            .get('wishlist')
            .addListener('change', this.storeDidUpdate);

        Wishlist.fetchData(app);
    },

    componentWillUnmount() {
        const app = this.props.app;

        app.stores()
            .get('wishlist')
            .removeListener('change', this.storeDidUpdate);
    },

    storeDidUpdate() {
        this.forceUpdate();
    },

    render() {
        const actions = this.props.app
            .actions()
            .get('wishlist');

        const store = this.props.app
            .stores()
            .get('wishlist');

        const items = store.getItems();

        return items.length ?
            <ListItems actions={actions} items={items} /> :
            <span>Your wishlist is empty</span>;
    }
});

export default Wishlist;