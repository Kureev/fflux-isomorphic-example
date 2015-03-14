'use strict';

import React, { Component } from 'react';

const ListItems = React.createClass({
    getDefaultProps() {
        return {
            items: [{
                "name": "Panerai Luminor 950",
                "photo": "./img/1.jpg"
            }, {
                "name": "Panerai Radiomir 940",
                "photo": "./img/2.jpg"
            }]
        };
    },

    getItems() {
        var items = this.props.items;

        return items.map(function(i) {
            return (
                <li>
                    <span>{i.name}</span>
                </li>
            );
        });
    },

    render() {
        let content;
        
        if (this.props.items.length) {
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