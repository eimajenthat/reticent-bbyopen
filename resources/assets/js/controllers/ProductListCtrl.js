angular.module('reticentDemoApp.controllers',[])
    .controller('ProductListCtrl', ['$scope', 'Product', function($scope, Product){
        $scope.products = Product.query();
    }]
);