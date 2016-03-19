Foo = new Mongo.Collection('foo');
Bar = new Mongo.Collection('bar');

Foo.allow({
  insert: () => true
});

Bar.allow({
  insert: () => true
});
