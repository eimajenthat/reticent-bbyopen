angular.module('reticentDemoApp.services',['ngResource']).factory('Store', ['$resource', function($resource){
    return $resource(
        '/store/:id',
        {Id: "@id"},
        {
            query: {'method':'GET', 'params':{}, isArray: true}
        }
    );
}]);