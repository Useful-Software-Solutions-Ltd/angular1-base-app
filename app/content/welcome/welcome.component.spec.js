describe('welcome component', function () {
    beforeEach(module('content'));

    describe('WelcomeController', function () {

        it('should build', function ($componentController) {
            var ctrl = $componentController('welcome');
            expect(ctrl).toBeDefined();
        });

        it('should have a title welcome', function ($componentController) {
            var ctrl = $componentController('welcome');
            expect(ctrl.title).toBe('welcome');
        });
    });
});
