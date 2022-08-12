/**
 * DLL  - Exercise
  Implement the following on the DoublyLinkedList class
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.val = val;
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.length) return;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
    }
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.length) return;

    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head.next;
      removedNode.next = null;
      newHead.prev = null;
      this.head = newHead;
    }
    this.length--;
    return removedNode;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let foundedNode;
    let counter;
    if (index <= this.length / 2) {
      foundedNode = this.head;
      counter = 0;
      while (counter !== index) {
        foundedNode = foundedNode.next;
        counter++;
      }
    } else {
      foundedNode = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        foundedNode = foundedNode.prev;
        counter--;
      }
    }
    return foundedNode;
  }
  set(index, val) {
    const foundedNode = this.get(index);
    if (!foundedNode) return false;
    foundedNode.val = val;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const beforeNode = this.get(index - 1);
    const removedNode = beforeNode.next;
    const afterNode = removedNode.next;
    (beforeNode.next = afterNode), (afterNode.prev = beforeNode);
    (removedNode.prev = null), (removedNode.next = null);
    this.length--;
    return removedNode;
  }
}

var doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.remove(2).val); // 15
console.log(doublyLinkedList.remove(100)); // undefined
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.head.next.val); // 10
console.log(doublyLinkedList.head.next.next.val); // 20
