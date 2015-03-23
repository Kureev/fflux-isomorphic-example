import React from 'react';
import Router from 'react-router';
import routes from './routes';
import fetchData from './fetchData';
import app from './app';

export default (req, res) => {
    Router.run(routes, req.url, (Handler, state) => {
        fetchData(state.path).then((data) => {
            if (data) {
                app.stores().rehydrate(data);
            }

            const content = React.renderToString(
                <Handler app={app} />
            );

            res.render('layout', {
                content: content,
                data: JSON.stringify(data || [])
            });
        });
    });
};