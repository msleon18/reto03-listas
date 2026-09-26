export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

    append(value) {
  const newNode = new Node(value);

  if (!this.head) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }

  this.tail = newNode;
  this.length++;
    }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value.title + " - " + current.value.artist);
      current = current.next;
    }
  }
}