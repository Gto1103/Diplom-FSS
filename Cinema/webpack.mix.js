// webpack.mix.js

const mix = require('laravel-mix');

mix.js('resources/js/index.js', 'public/js')
    .react()
    .css('resources/css/normalize.css', 'public/css')
    .sass('resources/sass/styles.scss', 'public/css')
    .css('resources/css/admin/normalize.css', 'public/css/admin')
    .sass('resources/sass/admin/styles.scss', 'public/css/admin')
