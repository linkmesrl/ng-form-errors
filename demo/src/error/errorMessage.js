'use strict';

angular.module('ngFormErrors')
.directive('errorMessage', function(validationErrors) {


        return {
            restrict: 'E',
            templateUrl: validationErrors.template || 'error.tpl.html',
            scope: {
                field:'=field',
                invalidMessage:'@invalidMessage',
                errorMsgs: '=errorMsgs',
                serverError:'=serverError',
            },

            link: function postLink(scope) {

                if(scope.errorMsgs){

                    angular.extend(validationErrors.errorMessages, scope.errorMsgs);
                }

                scope.getErrMsg = function(errType){

                   return validationErrors.errorMessages[errType] || validationErrors.errorMessages.default;
                };

                if(scope.field)
                {
                    scope.$watch('serverError.messages[field.$name]', function(value){
                        if(value){
                            scope.field.$showErr = true;
                        }
                    });
                }

            }
        };
    });
