import db from './db';

export default (app) => {
    /* Get all items in the list */
    app.get('/api/list', (req, res) =>
        db.list.find({}, (err, list) => res.json(list))
    );

    /* Add new item to the wishlist */
    app.post('/api/wishlist', (req, res) => {
        const condition = { _id: req.body.itemId };

        db.wishlist.findOne(condition, (err, found) => {
            if (err) {
                res.json(err);
            }

            if (found) {
                res.json({ error: 'Already in the wishlist'});
            } else {
                db.list.findOne(condition, (err, record) =>
                    db.wishlist.insert(record, () => res.json(record))
                );
            }
        });
    });

    /* Get all items in the wishlist */
    app.get('/api/wishlist', (req, res) =>
        db.wishlist.find({}, (err, wl) => res.json(wl))
    );
};