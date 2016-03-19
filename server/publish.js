Meteor.publish("foo", function() {
  return Foo.find({});
});

Meteor.publish("bar", function() {
  return Bar.find({});
});
