const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: 'error', // 设置eslint报错时停止代码编译
    productionSourceMap: false, // 不需要生产环境的 source map（减小dist文件大小，加速构建）
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            scss:{
                prependData:'@import "./src/styles/main.scss";'
            }
        },
        modules:false
    },
    devServer: {
        open: true,  // npm run serve后自动打开页面
        host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
        port: 8080, // 开发服务器运行端口号
        // proxy: {
        //     '/api': {
        //         target: '', // 代理接口地址
        //         secure: false,  // 如果是https接口，需要配置这个参数
        //         changeOrigin: true, // 是否跨域
        //         pathRewrite: {
        //             '^/api': ''   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
        //         }
        //     }
        // }
    },
    chainWebpack: (config) => {
        // 第1个参数：别名，第2个参数：路径  （设置路径别名）
        config.resolve.alias
            .set('@pages', resolve('./src/page'))
            .set('@router', resolve('./src/router'))
            .set('@store', resolve('./src/store'))
            .set('@utils', resolve('./src/utils'))

        config.module
            .rule("eslint")
            .use("eslint-loader")
            .loader("eslint-loader")
            .tap(options => {
                options.fix = true;
                return options;
            });
    }
}
