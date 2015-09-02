## Reticent Demo

This is a web application to show visitors a set of products for sale at local Best Buy stores, and to help them find a store at which to buy those products.

It employs AngularJS, Laravel, BBYOpen, and other technologies as needed.

### Install/Setup Instructions

Basic assumptions: you have a web server (Apache, Nginx, PHP's built in server) configured to serve the public/ directory of this project, probably as a VHost, but possibly as a sub directory, whatever makes sense for you.

git clone {{git url}} {{destination dir}}
cd {{destination dir}}
cp .env.example .env
// edit .env as needed
composer install
npm install
npm install -g gulp
gulp
php artisan key:generate
chown -R www-data:www-data ./vendor
chown -R www-data:www-data ./storage
