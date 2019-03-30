const path = require('path')

module.exports = {
  outputDir: '../web',
  lintOnSave: true,
  configureWebpack: {
    entry: './src/main.js'
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    if (process.env.NODE_ENV === 'development') {
      config.output.filename('[name].[hash].js').end()
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/_vars.scss'),
        path.resolve(__dirname, './src/styles/_mixins.scss')
      ]
    })
}

function resolve (dir) {
  return path.join(__dirname, dir)
}
