import request from 'superagent';

export default {
    /**
     * Fetch data
     * @param  {Function} dispatch
     * @return {Void}
     */
    fetch(dispatch) {
        return new Promise((done, fail) => {
            request
                .get('http://localhost:3000/api/list')
                .end((err, res) => {
                    dispatch('LIST_FETCHED', res.body);
                    done();
                });
        });
    }
};