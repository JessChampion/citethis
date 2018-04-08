const mix = require('laravel-mix');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const SRC = {
  plugin: 'src/cite-this.js',
  wc: 'src/cite-this-wc.js',
  component: 'src/CiteThisVueComponent.js',
  demo: {
    images: 'demo/images',
    index: 'demo/index.html',
    main: 'demo/main.js',
    plugin: 'dist/cite-this.js',
    wc: 'dist/cite-this-wc.js'
  }
};

const DEST = {
  dist: 'dist/',
  demo: 'dist/demo/',
  styles: 'dist/vue_extracted_styles.css'
};

mix.extend('cssModuleLoader', (webpackConfig, ...args) => {
  let vueLoader = webpackConfig.module.rules.find(loader => loader.loader == 'vue-loader');
  vueLoader.options = require('webpack-merge').smart(
    vueLoader.options,
    {
      shadowMode: true, //will inject styles in vue-loader v.14 up
      loaders: {
        scss: [
          {
            loader: 'vue-style-loader',
            options: {
              includePaths: ['node_modules']
            }
          },
          {
            loader: 'css-loader',
            options: {
              includePaths: ['node_modules']
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules']
            }
          }
        ]
      }
    }
  );
});
mix.cssModuleLoader();

// Build the plugin
mix.js(SRC.plugin, DEST.dist);

// Build the component
mix.js(SRC.component, DEST.dist);

// Build the demo
mix.js(SRC.demo.main, DEST.demo);

// Build the web component
mix.js(SRC.wc, DEST.dist);

// Copy demo files
mix.copy(SRC.demo.plugin, DEST.demo);
mix.copy(SRC.demo.wc, DEST.demo);
mix.copy(SRC.demo.index, DEST.demo);
mix.copy(SRC.demo.images, `${DEST.demo}\images`);

// Custom webpack config
if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  });
}