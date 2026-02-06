import { buildResolver } from "./buildResolver"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { BuildOptions } from "./types/config"
import { buildDevServer } from "./buildDevServer"
import webpack from "webpack"

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolver(),
    devtool: !isDev ? undefined : "inline-source-map",
    devServer: buildDevServer(options)
  }
}
