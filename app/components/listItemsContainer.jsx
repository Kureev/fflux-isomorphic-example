'use strict';

import React from 'react';
import ListItems from './listItems';

/**
 * Generate list item
 * @param  {Object} data
 * @return {React.Component}
 */
function getItem(data) {
    return (
        <li key={data.id}>
            <span>{data.name}</span>
        </li>
    );
}

const ListItemsContainer = React.createClass({

    statics: {
        fetchData: (app) => {
            app.actions()
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

    getInitialState() {
        const store = this.props.app
            .stores()
            .get('list');

        return {
            items: store.getItems()
        };
    },

    storeDidUpdate() {
        const store = this.props.app
            .stores()
            .get('list');

        this.setState({
            items: store.getItems()
        });
    },

    /**
     * Get items array
     * @return {Array}
     */
    getItems() {
        let elements;

        if (!this.state || !this.state.items) {
            elements = <li>Loading...</li>;
        } else {
            elements = this.state.items.map(getItem);
        }

        return elements;
    },

    render() {
        return (
            <ListItems items={this.getItems()} />
        );
    }
});

export default ListItemsContainer;