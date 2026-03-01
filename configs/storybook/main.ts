import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'
import { fileURLToPath } from 'url'
import webpack from 'webpack'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const config: StorybookConfig = {
    stories: [
        '../../src/**/*.mdx',
        '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        '@storybook/addon-onboarding',
        '@storybook/addon-webpack5-compiler-babel',
    ],
    framework: '@storybook/react-webpack5',
    webpackFinal: async (config) => {
        if (!config.resolve) {
            config.resolve = {}
        }
        config.resolve.modules = [
            ...(config.resolve.modules || []),
            path.resolve(__dirname, '../../src'),
        ]

        if (config.module?.rules) {
            // Disable default SVG loader
            const imageRule = config.module.rules.find(
                (rule) =>
                    rule &&
                    typeof rule === 'object' &&
                    'test' in rule &&
                    rule.test instanceof RegExp &&
                    rule.test.test('.svg')
            )
            if (imageRule && typeof imageRule === 'object') {
                imageRule.exclude = /\.svg$/
            }

            // Add SVGR loader
            config.module.rules.push({
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            })

            // Add SCSS loader
            config.module.rules.push({
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            modules: {
                                auto: (resPath: string) =>
                                    Boolean(resPath.includes('.module.')),
                                localIdentName: '[path][name]__[local]',
                                namedExport: false,
                            },
                        },
                    },
                    'sass-loader',
                ],
            })
        }

        return config
    },
}
export default config
