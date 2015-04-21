angular.module('errorMessageModule', []).directive('errorMessage', [

    function() {

        'use strict';

        return {
            restrict: 'E',
            template: '<div ng-include="contentUrl()"></div>',
            scope: {
                field:'=field',
                invalidMessage:'@invalidMessage',
                errorMsgs: '=errorMsgs',
                serverError:'=serverError',
                templateUrl: '@templateUrl'
            },

            link: function postLink(scope) {

                console.log(scope);

                scope.contentUrl = function(){
                    return scope.templateUrl;
                };

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
    }
]);
