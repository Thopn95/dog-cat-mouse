function Dog() {
  this.stomach = [];
}

Dog.prototype.eat = function(cat) {
  this.stomach.add(cat);
}
