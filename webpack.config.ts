import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { buildEnv, BuildPaths } from './configs/build/types/config';

export default (env: buildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode;
  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode || 'development',
    paths,
    isDev,
    port: env.port || 3000,
  })

  return config;
}
