const mix = require('laravel-mix');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const SRC = {
  plugin: 'src/cite-this.js',
  component: 'src/CiteThisVueComponent.js',
  demo: {
    index: 'demo/index.html',
    main: 'demo/main.js',
  }
};

const DEST = {
  dist: 'dist/',
  demo: 'dist/demo/',
};

//Build the plugin
mix.js(SRC.plugin, DEST.dist);

//Build the component
mix.js(SRC.component, DEST.dist);

//Build the demo
mix.js(SRC.demo.main, DEST.demo);
mix.copy(SRC.demo.index, DEST.demo);

// Custom webpack config
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  });
}