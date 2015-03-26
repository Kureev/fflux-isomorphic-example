'use strict';

import React from 'react';
import ListItems from './listItems';

const ListItemsContainer = React.createClass({

    statics: {
        fetchData: (app) => {
            return app.actions()
                .get('list')
                .fetch();
        }
    },

    componentWillMount() {
        const app = this.props.app;

        app.stores()
            .get('list')
            .addListener('change', this.storeDidUpdate);

        ListItemsContainer.fetchData(app);
    },

    componentWillUnmount() {
        const app = this.props.app;

        app.stores()
            .get('list')
            .removeListener('change', this.storeDidUpdate);
    },

    storeDidUpdate() {
        this.forceUpdate();
    },

    render() {
        const store = this.props.app
            .stores()
            .get('list');

        const actions = this.props.app
            .actions()
            .get('wishlist');

        return (
            <ListItems actions={actions} items={store.getItems()} />
        );
    }
});

export default ListItemsContainer;