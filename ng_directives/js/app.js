/**
 * Created by SAIRAM9921 on 02-Dec-16.
 */
var app = angular.module('directiveApp', []);

app.controller('dirCtrl', ['$scope', function($scope) {
    $scope.user={};
    $scope.getMarks = function () {
        $scope.mytotal = parseInt($scope.user.marks1) +parseInt( $scope.user.marks2);
        $scope.display = $scope.user.name+$scope.user.roll+"total  score  is"+$scope.mytotal;
        return $scope.display;
        
    }
   
}]);