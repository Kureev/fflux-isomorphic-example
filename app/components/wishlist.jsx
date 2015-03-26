'use strict';

import React, { Component } from 'react';

const Wishlist = React.createClass({
    statics: {
        fetchData: (app) => {
            return app.actions()
                .get('wishlist')
                .fetch();
        }
    },

    render() {
        return (
            <section>Wishlist is empty</section>
        );
    }
});

export default Wishlist;