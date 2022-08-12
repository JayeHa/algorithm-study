/**
 * DLL push - Exercise
  Implement the following on the DoublyLinkedList class

  push
  This function should accept a value add a node to the end of the DoublyLinkedList with the given value.
  It should return the DoublyLinkedList.
 */
{
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
  }
}

/**
 * DLL unshift - Exercise
  Implement the following on the DoublyLinkedList class

  unshift
  This function should accept a value and add a node to the beginning of the DoublyLinkedList with the given value. It should return the DoublyLinkedList.
 */
{
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
      const node = new Node(val);
      if (this.head === null) {
        this.head = node;
        this.tail = this.head;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
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
  }
}
