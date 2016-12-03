describe('features component', function () {
    beforeEach(module('content'));

    describe('FeaturesController', function () {

        it('should build', function ($componentController) {
            var ctrl = $componentController('features');
            expect(ctrl).toBeDefined();
        });

        it('should have a title welcome', function ($componentController) {
            var ctrl = $componentController('features');
            expect(ctrl.title).toBe('welcome');
        });
    });
});
