/**
 * Created by thomas on 12/04/17.
 */
app.controller('SecondController',[
    '$scope','$rootScope','$routeParams','$log','defaultFactory',function($scope, $rootScope, $routeParams, $log,defaultFactory) {
    //this comes from route params
    $scope.id = $routeParams.id;


    $scope.callPromise = function(stringToSend){
        defaultFactory.simulateHttpCall(stringToSend)
            .then(res => {
                $log.debug(res);
                $scope.returned = res;
            })
            .catch(err => {
                $log.error(err);
            });
    }

    }]);