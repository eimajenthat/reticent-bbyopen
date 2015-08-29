var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    // Application Scripts
    mix
        .sass('app.scss')
        .styles(['*.css'])
        .scripts([
            'lib/jquery-1.11.3.js',
            'lib/angular.js',
            'lib/*.js',
            'app.js',
            'controllers/*.js',
            'services/*.js'
        ])
        .copy('resources/assets/fonts', 'public/fonts')
        .copy('resources/assets/partials', 'public/partials')
        .version([
            'css/all.css',
            'js/all.js'
        ]);
});