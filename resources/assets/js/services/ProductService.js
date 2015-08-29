angular.module('reticentDemoApp.services',['ngResource']).factory('Product', ['$resource', function($resource){
    return $resource(
        '/product/:id',
        {Id: "@id"},
        {
            query: {'method':'GET', 'params':{}, isArray: true}
        }
    );
}]);