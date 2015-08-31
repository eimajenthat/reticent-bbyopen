angular.module('reticentDemoApp.controllers')
    .controller('StoreListCtrl', ['$scope', 'Store', function($scope, Store){
        $scope.location = '78701';
        $scope.radius = 50;
        $scope.map = { center: { latitude: 0, longitude: 0 }, zoom: 10 };

        $scope.$watchCollection('[location,radius]',function(newVal){
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': newVal[0]}, function (result) {
                console.log(result[0]);
                $scope.map.center.latitude = result[0].geometry.location.lat();
                $scope.map.center.longitude = result[0].geometry.location.lng();
                $scope.stores = Store.query({location:result[0].geometry.location.lat()+','+result[0].geometry.location.lng(), radius:newVal[1]});

                $scope.$apply();
            });
        })


    }]
);