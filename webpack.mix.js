const mix = require('laravel-mix')
require('laravel-mix-purgecss')
require('mix-env-file')
require('dotenv').config()
require('laravel-mix-artisan-serve')

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

/*
 |--------------------------------------------------------------------------
 | Options
 |--------------------------------------------------------------------------
 |
 */
mix.options({
  processCssUrls: false,
  autoprefixer: {
    options: {
      browsers: ['last 6 versions']
    }
  }
})

/*
 |--------------------------------------------------------------------------
 | CSS
 |--------------------------------------------------------------------------
 |
 */
const css = () => {
  return mix
    .postCss('resources/css/app.css', 'public/css', [
      require('tailwindcss')('tailwind.config.js')
    ])
    .purgeCss({
      enabled: mix.inProduction(),
      folders: ['src', 'templates'],
      extensions: ['html', 'js', 'php', 'vue', 'css']
    })
    .sourceMaps()
}

/*
 |--------------------------------------------------------------------------
 | JavaScript
 |--------------------------------------------------------------------------
 |
 */
const js = () => {
  return mix.js('resources/js/app.js', 'public/js').sourceMaps()
}

/*
 |--------------------------------------------------------------------------
 | Development
 |--------------------------------------------------------------------------
 |
 */
const development = () => {
  if (process.env.MIX_HMR) {
    return js()
      .then(() => css())
      .serve()
  }

  js()
  css()
}

/*
 |--------------------------------------------------------------------------
 | Production
 |--------------------------------------------------------------------------
 |
 */
const production = () => {
  js()
  css()
}

if (mix.inProduction()) {
  console.log('prod')
  production()
} else {
  console.log('dev')
  development()
}

mix.browserSync('localhost:8000')
