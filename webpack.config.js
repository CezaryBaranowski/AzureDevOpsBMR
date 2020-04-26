const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const entries = {};
const samplesDir = path.join(__dirname, "src");
fs.readdirSync(samplesDir).filter((dir) => {
  if (fs.statSync(path.join(samplesDir, dir)).isDirectory()) {
    entries[dir] =
      "./" + path.relative(process.cwd(), path.join(samplesDir, dir, dir));
  }
});
console.log(entries);
module.exports = {
  target: "node",
  entry: entries,
  output: {
    filename: "[name]/[name].js",
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
  devServer: {
    https: true,
    port: 3000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "azure-devops-extension-sdk": path.resolve(
        "node_modules/azure-devops-extension-sdk"
      ),
    },
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "azure-devops-ui/buildScripts/css-variables-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.woff$/,
        use: [
          {
            loader: "base64-inline-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [new CopyWebpackPlugin([{ from: "**/*.html", context: "src" }])],
};
