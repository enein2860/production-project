import webpack from 'webpack';
import path from 'path';
import {fileURLToPath} from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {

  mode: "production",

  entry: path.resolve(__dirname, 'src', 'index.ts'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },

  plugins: [
      new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
      }
      ),
      new webpack.ProgressPlugin(),
  ],
}

export default config;