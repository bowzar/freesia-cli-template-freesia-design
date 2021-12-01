const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy("/account", {
        target: "http://account-dev.yulintu.com",
        changeOrigin: true,
    }));
    // app.use(proxy('/api', {
    //     target: 'http://localhost:8080'
    // }));
};