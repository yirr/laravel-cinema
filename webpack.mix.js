let mix = require('laravel-mix');

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

mix.webpackConfig({
    module: {
        rules: [{
            test: /\.scss/,
            enforce: "pre",
            loader: 'import-glob-loader'
        }]
    },
    devServer: {
        port: 8080,
        host: 'localhost',
        historyApiFallback: {
            index: 'index.php',
        },
    }
})
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');


//mix.version(); //cache busting

//browserSync
mix.browserSync({
    files: [
        "resources/views/**/*.blade.php",
        "resources/assets/*.*",
        "public/**/*.*",

    ],
    proxy: {
        target: "localhost:8000",
    },
    open: true,
});