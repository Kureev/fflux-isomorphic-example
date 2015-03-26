import db from './db';

export default (app) => {
    /* Get all items in the list */
    app.get('/api/list', (req, res) =>
        db.list.find({}, (err, list) => res.json(list))
    );

    /* Add new item to the wishlist */
    app.post('/api/wishlist', (req, res) => {
        const condition = { _id: req.body._id };

        db.wishlist.findOne(condition, (err, found) => {
            if (err) {
                res.status(400).send(err);
            }

            if (found) {
                res.status(400).send('Already in the wishlist');
            } else {
                db.list.findOne(condition, (err, record) => {
                    db.wishlist.insert(record, (err, record) => {
                        res.json(record);
                    });
                });
            }
        });
    });

    /* Get all items in the wishlist */
    app.get('/api/wishlist', (req, res) =>
        db.wishlist.find({}, (err, wl) => res.json(wl))
    );
};