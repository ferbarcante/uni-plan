const mix = require('laravel-mix');

mix.js('resources/js/app.jsx', 'public/js')
   .react() // Isso permite o suporte a JSX
   .sass('resources/sass/app.scss', 'public/css');