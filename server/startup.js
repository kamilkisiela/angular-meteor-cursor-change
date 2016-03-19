Meteor.startup(function() {
  Foo.remove({});
  Bar.remove({});

  fake(Foo, 50);
  fake(Bar, 40);
});


function fake(what, times) {
  for (var i = 0; i < times; i++) {
    what.insert({
      name: Fake.word(),
      description: Fake.sentence(5)
    });
  }
}
