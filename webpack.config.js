const merge = require('webpack-merge')
const baseConf = require('./build/webpack.base.conf.js')
const devConf = require('./build/webpack.dev.conf.js')
const prodConf = require('./build/webpack.prod.conf.js')

module.exports = (env) => {
  console.log('env = ', env)
  if (env === 'production') return merge(baseConf, prodConf)
  return merge(baseConf, devConf)
}
