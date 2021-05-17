const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: '组件集合',
    description: '水印，页面水印',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [
          'readme.md',
          'changelog.md',
          'code_of_conduct.md',
          'contributing.md',
          'license.md',
        ],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/beike/Documents/BK/water-mask/water-mask/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: ['./src/**/*.{md,markdown,mdx}'],
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '组件集合',
        description: '水印，页面水印',
        host: 'localhost',
        port: 3333,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/beike/Documents/BK/water-mask/water-mask',
          templates:
            '/Users/beike/Documents/BK/water-mask/water-mask/node_modules/docz-core/dist/templates',
          docz: '/Users/beike/Documents/BK/water-mask/water-mask/.docz',
          cache: '/Users/beike/Documents/BK/water-mask/water-mask/.docz/.cache',
          app: '/Users/beike/Documents/BK/water-mask/water-mask/.docz/app',
          appPackageJson:
            '/Users/beike/Documents/BK/water-mask/water-mask/package.json',
          appTsConfig:
            '/Users/beike/Documents/BK/water-mask/water-mask/tsconfig.json',
          gatsbyConfig:
            '/Users/beike/Documents/BK/water-mask/water-mask/gatsby-config.js',
          gatsbyBrowser:
            '/Users/beike/Documents/BK/water-mask/water-mask/gatsby-browser.js',
          gatsbyNode:
            '/Users/beike/Documents/BK/water-mask/water-mask/gatsby-node.js',
          gatsbySSR:
            '/Users/beike/Documents/BK/water-mask/water-mask/gatsby-ssr.js',
          importsJs:
            '/Users/beike/Documents/BK/water-mask/water-mask/.docz/app/imports.js',
          rootJs:
            '/Users/beike/Documents/BK/water-mask/water-mask/.docz/app/root.jsx',
          indexJs:
            '/Users/beike/Documents/BK/water-mask/water-mask/.docz/app/index.jsx',
          indexHtml:
            '/Users/beike/Documents/BK/water-mask/water-mask/.docz/app/index.html',
          db:
            '/Users/beike/Documents/BK/water-mask/water-mask/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
