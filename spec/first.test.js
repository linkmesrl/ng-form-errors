'use strict';

describe('fallistco', function(){
    it('should fail forever', function(){
        expect(false).to.equal(true);
    });
});

xdescribe('Blur Directive', function () {

  var element, scope;
  beforeEach(module('blurModule'));
  beforeEach(inject(function ($compile, $rootScope) {
      scope = $rootScope.$new();
      element = $compile('<form><input blur type="number" ng-model="model"></input></form>')(scope);
    }));

  it('should add a class on blur with invlaid type', function () {
      scope.model = 'ciao';
      //scope.$digest();
      var el = element.find('input');
      el[0].blur();
      xexpect(element.find('input').hasClass('invalid')).to.equal(true);
    });

});
