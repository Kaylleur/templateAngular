/**
 * Created by thomas on 12/04/17.
 */
angular.module("DefaultFactory", []).factory('defaultFactory',[
    '$http', '$q',function($http, $q){

    var factory = {};

        /**
         * return promise
         * @param stringToReturn string
         * @return Promise
         */
    factory.simulateHttpCall = function(stringToReturn){
        var defer = $q.defer();

        setTimeout(function(){
            defer.resolve(stringToReturn);
        },2000);

        return defer.promise;
    };

    return factory;

}]);