const PROXY_CONFIG =[
{
  context:[
    '/curriculo',
  ],

  target: "http://localhost:4200/",
  secure: false,
  changeOrigin: true,
  pathRewrite: {
    "^/": ""
  }

}

]
  module.exports = PROXY_CONFIG;




