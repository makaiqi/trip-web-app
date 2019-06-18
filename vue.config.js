module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production"
      ? './'
      : '/',
  // 关闭eslint检查
  lintOnSave: false,
  // 生产环境关闭SourceMap
  productionSourceMap: process.env.NODE_ENV === "development"
};