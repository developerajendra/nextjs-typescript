const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa');
// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// });

 
const isProd = process.env.NODE_ENV === 'production'

module.exports = {

  sassLoaderOptions: { 
    includePaths: ['./styles'] 
  },

  cssLoaderOptions: {  
    modules: {
      // This could be a next.js default?
      localIdentName: isProd ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]',
    },
  }

}



module.exports = withPWA({
  pwa: {
      dest: 'public',
      // disable: process.env.NODE_ENV === 'development'
      disable:true
  }
})