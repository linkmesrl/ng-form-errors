'use strict';

angular.module('validationErrors', [])
.provider('validationErrors', function() {

    this.template = '';

    var _this = this;

    this.$get = function() {
        return {
            template: _this.template
        };
    };

});
