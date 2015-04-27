'use strict';


/*
 *  Questa direttiva, se associata ad un elemento
 *  gli aggiunge una classe invalid se e un proprietà showErr = true
 *  se l'elemento è non valido ed ha subito un blur, opure se è stato tentato l'invio
 *  del form e l'elemento non è ancora valido
 *
 *  Scrivo delle cose, per vedere se vanno i subtrees
 *
 *
 *
 */



angular.module('validationErrors')
.directive('blur', function() {

    var INVALID_CLASS   = 'invalid';
    var ERROR_REQUIRED  = 'Campo obbligatorio';

    return {
        restrict: 'A',
        require : ['^form', 'ngModel'],

        link: function postLink(scope, element, attrs, ctrls) {

            var ctrl = ctrls[1];
            var form = ctrls[0];

            if(form.$$parentForm && form.$$parentForm.$name){

                form = form.$$parentForm;
            }

            ctrl.$showErr = false;

            scope.$errorMessage = ERROR_REQUIRED;



            scope.$watch(function(){return form.$submitted;}, function(submitted){

                if(submitted=== true && ctrl.$invalid === true){

                    element.addClass(INVALID_CLASS);
                    ctrl.$showErr = true;
                }
            });


            //torna subito bello appeno l'utente corregge

            scope.$watch(function() {return ctrl.$invalid;}, function(invalid){

            if(!invalid && ctrl.$showErr){

                element.removeClass(INVALID_CLASS);
                ctrl.$showErr = false;
                }
            });


            element.bind('blur', function() {

                if(ctrl.$invalid === true){

                    element.addClass(INVALID_CLASS);
                    scope.$apply(function(){
                        ctrl.$showErr = true;
                    });
                }
                else {
                    element.removeClass(INVALID_CLASS);
                    scope.$apply(function(){
                        ctrl.$showErr = false;
                    });
                }
            });

        }
    };
});

