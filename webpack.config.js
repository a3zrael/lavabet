const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";

  return {
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isDevelopment ? "bundle.js" : "bundle.[contenthash].js",
    },
    cache: {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, ".temporary_cache"),
    },
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: [
            // isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.jsx$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|gif|)$/i,
          type: "asset/resource",
        },
        {
          test: /\.svg$/,
          type: "asset/resource",
          generator: {
            filename: "icons/[name].[contenthash][ext]",
          },
        },
        {
          test: /\.mp4$/,
          type: "asset/resource",
          generator: {
            filename: "video/[name].[contenthash][ext]",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
        filename: "index.html",
        minify: !isDevelopment && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
      !isDevelopment &&
        new MiniCssExtractPlugin({
          filename: "[name].[contenthash].css",
        }),
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: ["dist"],
          },
        },
      }),
    ].filter(Boolean),
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        new CssMinimizerPlugin(),
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    devServer: {
      watchFiles: path.join(__dirname, "src"),
      port: 3030,
    },
    mode: isDevelopment ? "development" : "production",
  };
};
