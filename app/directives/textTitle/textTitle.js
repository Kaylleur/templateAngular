/**
 * Created by thomas on 12/04/17.
 */
app.directive('textTitle', function() {
    return {
        restrict: 'E',
        scope: {
            title: '='
        },
        templateUrl: 'app/directives/textTitle/textTitle.html',
        link : function(scope){
            scope.title2 = "This comes fro the directive scope";
        }
    };
});