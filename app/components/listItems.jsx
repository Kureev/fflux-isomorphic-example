'use strict';

import React, { Component } from 'react';

const ListItems = React.createClass({

    statics: {
        fetchData: (actions, params) => {
            actions
                .get('list actions')
                .fetch(params.id);
        }
    },

    getItems() {
        return this.props.app
            .stores()
            .get('list')
            .getItems();
    },

    render() {
        let content;
        let items = this.getItems();
        
        if (items.length) {
            content = <ul>{
                items.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.name}</span>
                        </li>
                    );
                })
            }</ul>;
        } else {
            content = <span>No items to display</span>;
        }

        return (
            <section>
                { content }
            </section>
        );
    }
});

export default ListItems;