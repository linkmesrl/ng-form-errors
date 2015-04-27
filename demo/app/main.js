'use strict';

angular.module('validationErrorsDemo',[
    'validationErrors'
])
.config(function(validationErrorsProvider){
    validationErrorsProvider.template = 'error.tpl.html';
})
.controller('FormCtrl', function($scope){
    var sampleErrors = {
        "messages": {
            "email": [
                  "can't be blank",
                  "is null"
            ],
            "password": [
                  "can't be blank"
            ]
        }
    };

    $scope.showErr = function(){
        $scope.errors = sampleErrors;
    };
});
