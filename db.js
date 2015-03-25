'use strict';

import DataStore from 'nedb';

var db = {};

db.list = new DataStore();
db.wishlist = new DataStore();

db.list.insert([{
    "img": "http://img-prod.chronollection.com\
/%D8%B3%D8%A7%D8%B9%D8%A9-panerai-luminor-gmt-089425-large-1.jpg",
    "name": "Panerai Luminor 950"
}, {
    "img": "http://www.panerai.com/images/prodotti\
/collezione/historic/radiomir/PAM00504/thumb/Pam00504_Front.png",
    "name": "Panerai Radiomir PAM504"
}], (err, list) => console.log('DB: List table has been initialized'));

export default db;