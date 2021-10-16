let mix = require('laravel-mix')

mix
    // javascripts
    .ts('src/assets/javascripts/app.ts', 'javascripts').vue({ version: 3 })
    .sourceMaps()

    // stylesheets
    .sass('src/assets/sass/app.scss', 'stylesheets').setPublicPath('src/public')