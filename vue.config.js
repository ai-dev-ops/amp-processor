module.exports = {
    chainWebpack: config => {
      config.module.rule('md')
        .test(/\.md/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('marked')
        .loader('marked/lib/marked')
        .options({
          raw: true
        })
    }
  }