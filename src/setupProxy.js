const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy("/account", {
        target: "http://192.168.20.10:5552"
    }));
    // app.use(proxy('/api', {
    //     target: 'http://localhost:8080'
    // }));
};