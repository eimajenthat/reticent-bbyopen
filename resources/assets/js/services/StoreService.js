angular.module('reticentDemoApp.services').factory('Store', ['$resource', function($resource){
    return $resource(
        '/store/:id',
        {Id: "@id"},
        {
            query: {'method':'GET', 'params':{}, isArray: true}
        }
    );
}]);