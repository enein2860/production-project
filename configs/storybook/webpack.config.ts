import webpack from 'webpack'
import { BuildPaths } from '../webpack/types/config'
import path from 'path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '../../src'),
    }
    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve('./'),
    ]
    config.resolve.modules.push(paths.src)
    config.resolve.extensions.push('.ts', '.tsx')
    return config
}
