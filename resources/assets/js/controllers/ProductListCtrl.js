angular.module('reticentDemoApp.controllers')
    .controller('ProductListCtrl', ['$scope', 'Product', 'Modernizr', function($scope, Product, Modernizr){
        $scope.browser = {
            supportsTouch: Modernizr.touch
        };
        $scope.refreshProducts = function(){
            $scope.products = Product.query();
        };
        $scope.refreshProducts();
    }]
);