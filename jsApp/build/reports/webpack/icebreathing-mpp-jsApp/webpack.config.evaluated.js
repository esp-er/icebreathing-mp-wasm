{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/home/patrik/Documents/kotlin/icebreathing_mpp/build/js/packages/icebreathing-mpp-jsApp/kotlin/icebreathing-mpp-jsApp.js'
    ]
  },
  output: {
    path: '/home/patrik/Documents/kotlin/icebreathing_mpp/jsApp/build/distributions',
    filename: [Function: filename],
    library: 'jsApp',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/home/patrik/Documents/kotlin/icebreathing_mpp/jsApp/build/processedResources/js/main'
    ],
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    }
  },
  stats: {
    warnings: false,
    errors: false
  }
}