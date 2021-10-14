let mix = require('laravel-mix')

mix
    // javascripts
    .js('src/assets/javascripts/app.js', 'javascripts').vue({ version: 3 })
    .sourceMaps()

    // stylesheets
    .sass('src/assets/sass/app.scss', 'stylesheets').setPublicPath('src/public')