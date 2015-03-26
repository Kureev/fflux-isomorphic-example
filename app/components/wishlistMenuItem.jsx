import React from 'react';
import { Link } from 'react-router';

const WishlistMenuItem = React.createClass({

    componentDidMount() {
        this.props.wishlistStore
            .addListener('change', this.storeDidUpdate);
    },

    componentWillUnmount() {
        this.props.wishlistStore
            .removeListener('change', this.storeDidUpdate);
    },

    storeDidUpdate() {
        this.forceUpdate();
    },

    getCountBadge(count) {
        if (count > 0) {
            return (
                <div className="menu-badge">
                    <span className="menu-badge-num">{count}</span>
                </div>
            );
        }
    },

    render() {
        const count = this.props.wishlistStore.getItems().length;
        return (
            <li className="header-menu-item">
                <Link to="wishlist">
                    Wishlist
                    {this.getCountBadge(count)}
                </Link>
            </li>
        );
    }
});

export default WishlistMenuItem;