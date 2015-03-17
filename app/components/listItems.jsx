'use strict';

import React, { Component } from 'react';

const ListItems = React.createClass({

    getItems() {
        var items = this.props.data.items;

        return items.map(function(item, index) {
            return (
                <li key={index}>
                    <span>{item.name}</span>
                </li>
            );
        });
    },

    render() {
        let content;
        let items = this.getItems();
        
        if (items.length) {
            content = <ul>{this.getItems()}</ul>;
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