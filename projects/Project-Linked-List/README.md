# LinkedList Implementation in JavaScript

This is a simple implementation of a singly linked list in JavaScript. A linked list is a data structure that consists of nodes, where each node points to the next node in the sequence. This implementation includes the `LinkedList` class and a `Node` class for building and manipulating linked lists.

## Class: LinkedList

### Constructor

The `LinkedList` class has a constructor that initializes an empty linked list.

### Methods

1.  `append(value)`: Appends a new node with the given value to the end of the linked list.
2.  `prepend(value)`: Prepends a new node with the given value to the beginning of the linked list.
3.  `at(i)`: Returns the node at the specified index `i`.
4.  `pop()`: Removes and returns the first node from the linked list.
5.  `contains(val)`: Checks if the linked list contains a node with the specified value and returns `true` if found, `false` otherwise.
6.  `find(val)`: Searches for the first occurrence of a node with the specified value and returns its index if found, or 'not found' if not found.
7.  `toString()`: Returns a string representation of the linked list in the format `( value ) -> ( value ) -> ...`.
8.  `insertAt(val, i)`: Inserts a new node with the given value at the specified index `i`.
9.  `removeAt(i)`: Removes the node at the specified index `i` and returns the removed node.

### Getters

1.  `size`: Returns the number of nodes in the linked list.
2.  `head`: Returns the first node of the linked list.
3.  `tail`: Returns the last node of the linked list.

## Class: Node

This class represents a node in the linked list.

### Constructor

The `Node` class has a constructor that takes a value and an optional reference to the next node.

```javascript
const node = new Node(value, nextNode);
```

## Example

Here's an example of how to use this implementation:

```javascript const list = new LinkedList();
const normalNode = list.append('second item');
list.append('third item');
const preNode = list.prepend('first item');

console.log(list.toString());
console.log(list.removeAt(0));
console.log(list.toString());
```
