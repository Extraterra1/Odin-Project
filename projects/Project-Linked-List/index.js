class LinkedList {
  constructor() {
    this.list = '';
  }
  append(value) {
    if (this.list === '') return (this.list = new Node(value));
    this.tail.nextNode = new Node(value);
  }
  prepend(value) {
    this.list = new Node(value, this.list);
  }
  at(i, count = 0, currentItem = this.list) {
    if (i < 0 || i >= this.size) return 'invalid index';
    if (count === i || currentItem === null) return currentItem;
    count++;
    return this.at(i, count, currentItem.nextNode);
  }
  pop() {
    const popped = this.list.value;
    this.list = this.list.nextNode;
    return popped;
  }
  contains(val, currentItem = this.list) {
    if (val === currentItem.value) return true;
    if (currentItem.nextNode === null) return false;
    return this.contains(val, currentItem.nextNode);
  }
  find(val, currentItem = this.list, i = 0) {
    if (val === currentItem.value) return i;
    if (currentItem.nextNode === null) return 'not found';
    return this.find(val, currentItem.nextNode, ++i);
  }
  toString(currentItem = this.list) {
    if (currentItem === null) return 'null';
    return `( ${currentItem.value} ) - > ` + this.toString(currentItem.nextNode);
  }
  insertAt(val, i) {
    if (i < 0 || i > this.size) return 'invalid index';

    const currentNodeAtI = this.at(i);
    const newNode = new Node(val, currentNodeAtI);

    if (i === 0) return (this.list = newNode);
    const nodeBeforeI = this.at(i - 1);

    nodeBeforeI.nextNode = newNode;
    return this;
  }

  removeAt(i) {
    if (i < 0 || i >= this.size) return 'invalid index';
    const nodesAfterI = this.at(i + 1);
    const nodeBeforeI = this.at(i - 1);
    const deletedNode = this.at(i);
    if (i === 0) {
      this.list = this.list.nextNode;
      return deletedNode;
    }

    nodeBeforeI.nextNode = nodesAfterI;

    return deletedNode;
  }
  get size() {
    let currentItem = this.list;
    let counter = 0;
    while (currentItem !== null) {
      counter++;
      currentItem = currentItem.nextNode;
    }
    return counter;
  }
  get head() {
    return this.list;
  }
  get tail() {
    return this.at(this.size - 1);
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const list = new LinkedList();

const normalNode = list.append('second item');
list.append('third item');
const preNode = list.prepend('first item');

console.log(list.toString());
console.log(list.removeAt(0));
console.log(list.toString());
