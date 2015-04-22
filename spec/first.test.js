'use strict';

describe('Blur Directive', function () {

  var element, scope;
  beforeEach(module('blurModule'));
  beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      element = $compile('<form><input blur type="number" ng-model="model"/></form>')(scope);
    }));

  it('should add a class on blur with invlaid type', function () {
      //scope.model = 'ciao';

      var el = element.find('input');
      el.val('ciao');
      scope.$digest();
      el[0].focus();
      el[0].blur();
      console.log(element.find('input'));
      //expect(element.find('input').hasClass('invalid')).to.equal(true);
    });

});
