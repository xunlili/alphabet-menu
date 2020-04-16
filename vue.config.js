module.exports = {
  lintOnSave: true,
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-pxtorem')({
                      rootValue : 32, // 换算的基数
                      selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
                      propList   : ['*'],
                  }),
              ]
          }
      }
  },
}