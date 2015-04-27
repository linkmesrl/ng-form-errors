'use strict';

angular.module('ngFormErrors', [])
.provider('ngFormErrors', function() {

    this.template = '';

    var _this = this;

    this.$get = function() {
        return {
            template: _this.template
        };
    };

});
