angular.module('app', [
    'angular-meteor'
  ])
  .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $reactive) {
  $reactive(this).attach($scope);

  const vm = this;

  vm.type = 'foo';
  vm.limit = 50;

  vm.subscribe('foo');
  vm.subscribe('bar');

  vm.helpers({
    items() {
      const type = vm.getReactively('type');
      const limit = parseInt(vm.getReactively('limit'));

      return (vm.type === 'foo' ? Foo : Bar).find({}, {
        limit
      });
    }
  });
}
