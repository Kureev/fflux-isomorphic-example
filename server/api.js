import db from './db';

export default (app) => {
    /* Get all items in the list */
    app.get('/api/list', function(req, res) {
        db.list.find({}, function(err, list) {
            res.json(list);
        });
    });

    /* Add new item to the wishlist */
    app.post('/api/wishlist', function(req, res) {
        if (db.wishlist.find(req.body, function(err, found) {
            if (err) {
                res.json(err);
            }

            if (found.length) {
                res.json({ error: 'Already in the wishlist'});
            } else {
                db.wishlist.insert(req.body, function(err, record) {
                    res.json(record);
                });
            }
        }));
    });

    /* Get all items in the wishlist */
    app.get('/api/wishlist', function(req, res) {
        db.wishlist.find({}, function(err, wishlist) {
            res.json(wishlist);
        });
    });
};