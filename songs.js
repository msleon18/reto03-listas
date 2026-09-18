class Node { 
    constructor(value) { 
        this.value = value; 
        this.next = null; 
    } 
} 

class LinkedList {
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


const songs = [
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Imagine", artist: "John Lennon" },
  { title: "Hotel California", artist: "Eagles" },
  { title: "Billie Jean", artist: "Michael Jackson" },
  { title: "Thriller", artist: "Michael Jackson" },
];

const list = new LinkedList();
songs.forEach((song) => {
  list.append(song);
});

console.log(list);
list.print();