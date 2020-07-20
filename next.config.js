const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});

 
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



