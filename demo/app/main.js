'use strict';

angular.module('validationErrorsDemo',[
    'ngFormErrors'
])
.config(function(ngFormErrorsProvider){
    ngFormErrorsProvider.template = 'error.tpl.html';
})
.controller('FormCtrl', function($scope){
    var sampleErrors = {
        "messages": {
            "email": [
                  "can't be blank",
                  "is null"
            ],
            "size": [
                  "Should be a number"
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
