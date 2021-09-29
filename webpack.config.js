const path = require("path");

const config = {
  entry: "./main.js", // 定义入口文件
  output: {
    path: path.resolve(__dirname + "/dist"), // 打包生成文件地址
    filename: "[name].build.js", // 生成文件名成名
  },
};
module.exports = config;
