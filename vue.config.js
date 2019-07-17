module.exports = {
  /** 区分打包环境与开发环境
   * process.env.NODE_ENV==='production'  (打包环境)
   * process.env.NODE_ENV==='development' (开发环境)
   * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
   */
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
  // 如果想要引入babel-polyfill可以这样写
  // configureWebpack: (config) => {
  //   config.entry = ["babel-polyfill", "./src/main.js"]
  // },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    // 启用 CSS modules for all css / pre-processor files.
    modules: false,
    loaderOptions: {
      css: {
        // options here will be passed to css-loader
      },
      sass: {
        // @/ 是 src/ 的别名
        // 全局变量
        data: `@import "@/styles/common.scss";`
      },
      postcss: {
        // options here will be passed to postcss-loader
        // plugins: [require('postcss-px2rem')({
        //   remUnit: 75
        // })]
      }
    }
  },
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8086,
    https: false,
    hotOnly: false,
    // 设置代理
    proxy: {
      // proxy table example
      '/shops': {
        target: 'https://shop.deeptel.com.cn',
        changeOrigin: true,
        pathRewrite: {
          // 如果接口本身没有/api需要通过pathRewrite来重写了地址
          //   '^api': ''
        }
      }
    }
    // before: app => { }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
