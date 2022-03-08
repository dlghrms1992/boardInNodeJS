const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
 app.use(
     createProxyMiddleware(['/api', '/user'], {
        target: "http://localhost:12201",
        changeOrigin: true,
        router: {
            '/user': "http://localhost:12201",
        },
        pathRewrite:{
         '^/api': ''
      },
     })
 );

};