export default {
    /**
     * Fetch data
     * @param  {Function} dispatch
     * @return {Void}
     */
    fetch(dispatch) {
        return new Promise((done, fail) => {
            // Fake timeout to imitate async request
            setTimeout(() => {
                dispatch('LIST_FETCHED', [{
                    "id": 1,
                    "img": "http://img-prod.chronollection.com/%D8%B3%D8%A7%D8%B9%D8%A9-panerai-luminor-gmt-089425-large-1.jpg",
                    "name": "Panerai Luminor 950"
                }, {
                    "id": 2,
                    "img": "http://www.panerai.com/images/prodotti/collezione/historic/radiomir/PAM00504/thumb/Pam00504_Front.png",
                    "name": "Panerai Radiomir PAM504"
                }]);
                done();
            }, 300);
        });
    },

    /**
     * Store item to wishlist
     * @param  {Function} dispatch
     * @param  {Number} itemId
     * @return {Void}
     */
    addToWishlist(dispatch, itemId) {
        console.log('store', itemId);
        dispatch('ITEM_STORED', {
            itemId: itemId
        });
    }
};