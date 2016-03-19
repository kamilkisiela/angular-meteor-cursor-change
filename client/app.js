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
        limit,
        sort: {
          createdAt: -1
        }
      });
    }
  });

  vm.add = (type) => {
    console.log('add:', type);
    (type === 'foo' ? Foo : Bar).insert({
      name: Fake.word(),
      description: Fake.sentence(5),
      createdAt: new Date()
    });
  };
}
