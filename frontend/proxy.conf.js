const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8300',
    secure: false,
    changeOrigin: true,
    pathRewrite: { '^/api': '' }
  }
];

module.exports = PROXY_CONFIG;
