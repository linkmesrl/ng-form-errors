'use strict';
require('./blur');

//require angular mock for testing
require('angular-mocks');

describe('directive with templateUrl', function() {
    var element;
    var $scope;
    beforeEach(angular.mock.module('blurModule'));
    beforeEach(angular.mock.module('src/blur/blur.tpl.html'));
    beforeEach(angular.mock.inject(function($compile, _$rootScope_) {
        $scope = _$rootScope_;
        element = angular.element("<blur></blur>");
        element = $compile(element)($scope);
    }));

    it('template should be loaded', function() {
        $scope.$digest();
        expect(element.html()).toBe('This is directive for dummy');
    });
});

