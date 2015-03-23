export default (path) => {
    return new Promise(function(resolve, reject) {
        switch (path) {
            case '/':
                resolve([{
                    name: 'list',
                    data: {
                        items: [{
                            "id": 1,
                            "name": "Panerai Luminor 950"
                        }, {
                            "id": 2,
                            "name": "Panerai Radiomir 940"
                        }]
                    }
                }]);
                break;
            default:
                resolve();
                break;
        }
    });
};