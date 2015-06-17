'use strict';

angular.module('validationErrorsDemo',[
    'ngFormErrors'
])
.controller('FormCtrl', function($scope){
    var sampleErrors = {
        "messages": {
            "email": [
                  "can't be blank",
                  "is null"
            ],
            "email2": [
                  "is null"
            ],
            "size": [
                  "Should be a number"
            ],
            "size2": [
                  "Should be a number",
                  "Should be greater than X"
            ]
        }
    };

    $scope.showErr = function(){
        $scope.errors = sampleErrors;
    };

    $scope.clearErr = function(){
        delete $scope.errors;
    };
});
