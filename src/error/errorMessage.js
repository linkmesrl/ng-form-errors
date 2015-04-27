'use strict';

angular.module('ngFormErrors')
.directive('errorMessage', function(ngFormErrors) {


        return {
            restrict: 'E',
            templateUrl: ngFormErrors.template || 'error.tpl.html',
            scope: {
                field:'=field',
                invalidMessage:'@invalidMessage',
                errorMsgs: '=errorMsgs',
                serverError:'=serverError',
            },

            link: function postLink(scope) {

                var defaultMsg = 'Campo non valido';

                //TODO mettere in inglese?


                var errorMessages = {

                    required : 'Campo obbligatorio',
                    pattern : 'Formato non valido',
                    number : 'Inserire un numero',
                    email : 'Formato email non valido',
                };

                if(scope.errorMsgs){

                    angular.extend(errorMessages, scope.errorMsgs);
                }

                scope.getErrMsg = function(errType){

                   return scope.invalidMessage || errorMessages[errType] || defaultMsg;
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
