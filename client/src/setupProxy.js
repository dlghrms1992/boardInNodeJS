const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
 app.use(
     createProxyMiddleware('/api', {
        target: "http://localhost:12201",
        changeOrigin: true,
     })
 );

 app.use(
    createProxyMiddleware('/register', {
       target: "http://localhost:12201",
       changeOrigin: true,
    })
 );
};