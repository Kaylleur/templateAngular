/**
 * Created by thomas on 12/04/17.
 */
app.controller('HomeController',[
    '$scope','$rootScope','$log',function($scope, $rootScope,$log) {
        /**
         * $scope is used to communicate with your view
         * $routeParams authorized you to get data from the route like id
         * $rootScope is the scope which can be retrieved from all controller
         * $log permit you to use debug
         */

        $rootScope.shared = "This is shared between controller";

        $scope.h1 = "This is set from the scope";

        $scope.titles = [{
            text : "line 1"
        },{
            text : "line 2"
        },{
            text : "line 3"
        },{
            text : "line 4"
        }];

        $log.debug("this is only in debug");
        $log.warn("damn a warning !");

    }]);