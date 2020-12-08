const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const tailwindcss = require('tailwindcss')

mix
  .js('resources/js/app.js', 'public/js')
  .options({
    processCssUrls: false,
    postCss: [require('tailwindcss')('tailwind.config.js')],
    hmrOptions: {
      host: 'localhost',
      port: 8080
    }
  })
  .sourceMaps()


mix.webpackConfig({
  devServer: {
    proxy: {
      host: 'localhost',
      port: 8080
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 5000
    }
  }
})


mix.browserSync('localhost:8000')