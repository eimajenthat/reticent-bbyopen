angular.module('reticentDemoApp.controllers')
    .controller('StoreListCtrl', ['$scope', 'Store', function($scope, Store){
        $scope.location = '78701';
        $scope.radius = 50;
        $scope.map = { center: { latitude: 0, longitude: 0 }, zoom: 10 };

        var geocoder = new google.maps.Geocoder();

        $scope.$watchCollection('[location,radius]',function(newVal){
            geocoder.geocode({'address': newVal[0]}, function (result, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    $scope.map.center.latitude = result[0].geometry.location.lat();
                    $scope.map.center.longitude = result[0].geometry.location.lng();
                    $scope.stores = Store.query({
                        location: result[0].geometry.location.lat() + ',' + result[0].geometry.location.lng(),
                        radius: newVal[1]
                    });

                    $scope.$apply();
                }
            });
        });


        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            geocoder.geocode({'latLng': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    console.log(results);
                    var result = results[0];
                    for(var i=0, len=result.address_components.length; i<len; i++) {
                        var ac = result.address_components[i];
                        if(ac.types.indexOf("postal_code") >= 0) {
                            $scope.location = ac.long_name;
                            console.log(ac.long_name);
                            $scope.$apply();
                            break;
                        }
                    }
                }
            });
        });


    }]
);