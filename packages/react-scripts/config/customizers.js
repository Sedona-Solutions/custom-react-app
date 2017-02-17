var ExtractTextPlugin = require('extract-text-webpack-plugin');
var paths = require('./paths');

module.exports = {
  'TYPESCRIPT': {
    toArray: 'loaders',
    fileRegex: /\.(ts|tsx)$/,
    extensions: ['.ts', '.tsx'],
    getDev: function () {
      return {
        test: /\.(ts|tsx)$/,
        include: paths.appSrc,
        loader: 'ts',
      }
    }
  },
  'BABEL': {
    toArray: 'loaders',
    fileRegex: /\.(js|jsx)$/,
    extensions: ['.js', '.jsx'],
    getDev: function () {
      return {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          // FIXME: eject
          // @remove-on-eject-begin
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
          plugins: [],
          // @remove-on-eject-end
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
        }
      }
    },
    getProd: function () {
      return {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          // @remove-on-eject-begin
          babelrc: false,
          presets: [require.resolve('babel-preset-react-app')],
          plugins: [],
          // @remove-on-eject-end
        }
      }
    }
  },
  'TSLINT': {
    toArray: 'preLoaders',
    getDev: function () {
      return {
        test: /\.(ts|tsx)$/,
        loader: 'tslint',
        include: paths.appSrc
      }
    }
  },
  'ESLINT': {
    toArray: 'preLoaders',
    getDev: function () {
      return {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: paths.appSrc
      }
    }
  },
  'BABEL_STAGE_0': {
    toArray: 'presets',
    getDev: function () {
      return require.resolve('babel-preset-stage-0')
    }
  },
  'DECORATORS': {
    toArray: 'babelPlugins',
    getDev: function () {
      return require.resolve('babel-plugin-transform-decorators-legacy')
    }
  },
  'SASS': {
    toArray: 'loaders',
    fileRegex: /\.(scss|sass)/,
    getDev: function () {
      return {
        test: /(\.scss|\.sass)$/,
        loader: "style!css!postcss!sass"
      }
    },
    getProd: function () {
      return {
        test: /(\.scss|\.sass)$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass')
      }
    }
  },
  'LESS': {
    toArray: 'loaders',
    fileRegex: /\.less$/,
    getDev: function () {
      return {
        test: /\.less$/,
        loader: "style!css!postcss!less"
      }
    },
    getProd: function () {
      return {
        test: /\.less/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
      }
    }
  },
  'STYLUS': {
    toArray: 'loaders',
    fileRegex: /\.styl$/,
    getDev: function () {
      return {
        test: /\.styl/,
        loader: 'style!css!postcss!stylus'
      }
    },
    getProd: function () {
      return {
        test: /\.styl/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
      }
    }
  },
  'CSS_MODULES': {
    config: {
      dev: 'style!css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
      prod: 'style!css?modules&camelCase&-autoprefixer&importLoaders=1!postcss'
    }
  }
}
