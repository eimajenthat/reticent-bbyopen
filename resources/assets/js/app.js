var reticentDemoApp = angular.module('reticentDemoApp', [
    'ngRoute',
    'uiGmapgoogle-maps',
    'reticentDemoApp.controllers',
    'reticentDemoApp.services'
]);
angular.module('reticentDemoApp.controllers', []);
angular.module('reticentDemoApp.services', ['ngResource']);
reticentDemoApp.constant("Modernizr", Modernizr);

reticentDemoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/shopping-list', {
                templateUrl: 'partials/shopping-list.html',
                controller: 'ShoppingListCtrl'
            })
            .when('/stores', {
                templateUrl: 'partials/store-list.html',
                controller: 'StoreListCtrl'
            })
            .when('/stores/:storeId', {
                templateUrl: 'partials/store-detail.html',
                controller: 'StoreDetailCtrl'
            })
            .when('/products', {
                templateUrl: 'partials/product-list.html',
                controller: 'ProductListCtrl'
            })
            .when('/products/:productId', {
                templateUrl: 'partials/product-detail.html',
                controller: 'ProductDetailCtrl'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'partials/register.html',
                controller: 'RegisterCtrl'
            })
            .otherwise({
                redirectTo: '/products'
            });
    }
]);
