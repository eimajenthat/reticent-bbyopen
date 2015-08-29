angular.module('reticentDemoApp.controllers',[])
    .controller('StoreListCtrl', ['$scope', 'Store', function($scope, Store){
        $scope.stores = Store.query();
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    }]
);