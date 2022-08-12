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
}

var doublyLinkedList = new DoublyLinkedList();
console.log(doublyLinkedList.unshift(5)); // doublyLinkedList
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.head.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(10));
console.log(doublyLinkedList);
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.head.val); // 10
console.log(doublyLinkedList.head.next.val); // 5
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.unshift(15));
console.log(doublyLinkedList);
console.log(doublyLinkedList.length); // 3
console.log(doublyLinkedList.head.val); // 15
console.log(doublyLinkedList.tail.val); // 5
console.log(doublyLinkedList.head.next.next.val); // 5

console.log(doublyLinkedList.shift().val); // 15
console.log(doublyLinkedList.length); // 2
console.log(doublyLinkedList.shift().val); // 10
console.log(doublyLinkedList.length); // 1
console.log(doublyLinkedList.shift().val); // 5
console.log(doublyLinkedList.length); // 0
