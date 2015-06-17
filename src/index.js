'use strict';

angular.module('ngFormErrors', [])
.provider('validationErrors', function() {

    this.template = '';

    this.errorMessages = {
        required : 'Mandatory Field',
        pattern : 'Invalid Format',
        number : 'This should be a number',
        email : 'Invalid email address',
        default: 'Invalid Field'
    };

    var _this = this;

    this.$get = function() {
        return {
            template: _this.template,
            errorMessages: _this.errorMessages
        };
    };

});
