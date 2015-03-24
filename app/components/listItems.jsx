'use strict';

import React, { Component } from 'react';

const ListItems = React.createClass({

    render() {
        return (
            <section>
                <ul>{this.props.items}</ul>
            </section>
        );
    }
});

export default ListItems;