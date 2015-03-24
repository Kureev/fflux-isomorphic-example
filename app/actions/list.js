export default {
    /**
     * Fetch data
     * @param  {Function} dispatch
     * @return {Void}
     */
    fetch(dispatch) {
        // Fake timeout to imitate async request
        setTimeout(() => {
            dispatch('LIST_FETCHED', [{
                "id": 1,
                "name": "Panerai Luminor 950"
            }, {
                "id": 2,
                "name": "Panerai Radiomir 940"
            }]);
        }, 300);
    }
};