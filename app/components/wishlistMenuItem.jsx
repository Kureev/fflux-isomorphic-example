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

    render() {
        const count = this.props.wishlistStore.getItems().length;
        return (
            <li className="header-menu-item">
                <Link to="wishlist">
                    Wishlist
                    <div className="menu-badge">
                        <span className="menu-badge-num">{count}</span>
                    </div>
                </Link>
            </li>
        );
    }
});

export default WishlistMenuItem;