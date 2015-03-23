'use strict';

import React from 'react';
import ListItems from './listItems';

const ListItemsContainer = React.createClass({

    statics: {
        fetchData: (actions, params) => {
            actions
                .get('list actions')
                .fetch(params.id);
        }
    },

    getInitialState() {
        return this.context.store.getList();
    },

    getItems() {
        var items = this.props.data.items;

        return items.map((item) => {
            return (
                <li key={item.id}>
                    <span>{item.name}</span>
                </li>
            );
        });
    },

    render() {
        return (
            <ListItems items={this.state.list} />
        );
    }
});

export default ListItemsContainer;