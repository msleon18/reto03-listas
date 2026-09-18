class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
  const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
  }
  this.tail.next = newNode;
  newNode.prev = this.tail;
  this.tail = newNode;
  this.length++;
  }
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value.url + " - " + current.value.title);
      current = current.next;
    }
  }
  printReverse() {
  let current = this.tail;
  while (current !== null) {
    console.log(current.value.url + " - " + current.value.title);
    current = current.prev;
    }
  }
}

const pages = [
  { url: "https://google.com", title: "Google" },
  { url: "https://wikipedia.org", title: "Wikipedia" },
  { url: "https://github.com", title: "GitHub" },
  { url: "https://stackoverflow.com", title: "Stack Overflow" },
  { url: "https://developer.mozilla.org", title: "MDN Web Docs" },
];

const list = new DoublyLinkedList();
pages.forEach((page) => {
  list.append(page);
});

console.log(list);
list.print();
list.printReverse();