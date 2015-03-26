import React from 'react';
import { Link } from 'react-router';
import WishlistMenuItem from './wishlistMenuItem';

const HeaderMenu = React.createClass({
    render() {
        const wishlistStore = this.props.app.stores().get('wishlist');

        return (
            <ul className="header-menu">
                <li className="header-menu-item">
                    <Link to="index">Items List</Link>
                </li>
                <WishlistMenuItem wishlistStore={wishlistStore} />
            </ul>
        );
    }
});

export default HeaderMenu;