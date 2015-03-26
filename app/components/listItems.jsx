'use strict';

import React, { Component } from 'react';

const ListItems = React.createClass({
    /**
     * Generate list item
     * @param  {Object} data
     * @return {React.Component}
     */
    getItem(data) {
        let style = {
            backgroundImage: 'url(' + data.img + ')'
        };

        const clickHandler = this.props.actions.add.bind(null, data._id);
        //★

        return (
            <li key={data._id} className="wishlist-item" style={style}>
                <span className="wishlist-item-title">
                    {data.name}
                    <span
                        className="wishlist-item-toggle"
                        onClick={clickHandler}>☆
                    </span>
                </span>
            </li>
        );
    },

    /**
     * Get items list
     * @param  {Array} items
     * @return {Array|React.Component}
     */
    getItems(items) {
        return items ? items.map(this.getItem) : <li>Loading...</li>;
    },

    render() {
        return (
            <section>
                <ul className="wishlist-container">
                    {this.getItems(this.props.items)}
                </ul>
            </section>
        );
    }
});

export default ListItems;