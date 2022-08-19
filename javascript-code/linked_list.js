class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = undefined;
  }

  show() {
    return `data: ${this.data}`;
  }
}

export class LinkedList {
  constructor() {
    this.head = undefined;
  }

  show() {
    let nodes = [];
    let current = this.head;

    while (current) {
      if (current === this.head) {
        nodes.push(`[Head: ${current.data}]`);
      } else if (current.nextNode === undefined) {
        nodes.push(`[Tail: ${current.data}]`);
      } else {
        nodes.push(`[${current.data}]`);
      }
      current = current.nextNode;
    }
    return nodes.join("->");
  }

  isEmpty() {
    return this.head === undefined;
  }

  size() {
    let current = this.head;
    let count = 0;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  add(data) {
    let newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  search(key) {
    let current = this.head;
    while (current) {
      if (current.data === key) {
        return current;
      } else {
        current = current.nextNode;
      }
    }
    return undefined;
  }

  insert(data, index) {
    if (index === 0) this.add(data);

    if (index > 0) {
      const newNode = new Node(data);

      let position = index;
      let current = this.head;

      while (position > 1) {
        current = current.nextNode;
        position--;
      }

      let prevNode = current;
      let nextNode = current.nextNode;

      prevNode.nextNode = newNode;
      newNode.nextNode = nextNode;
    }
  }

  removeByKey(key) {
    let current = this.head,
      prevNode,
      found = false;

    while (current && !found) {
      if (current.data === key && current === this.head) {
        found = true;
        this.head = current.nextNode;
      } else if (current.data === key) {
        found = true;
        if (prevNode) {
          prevNode.nextNode = current.nextNode;
        }
      } else {
        prevNode = current;
        current = current.nextNode;
      }
    }
    return current || `could not find ${key}`;
  }

  removeByIndex(index) {
    let current = this.head;
    let position = index;

    if (index === 0) {
      this.head = current.nextNode;
      return current;
    }

    while (current && position > 1) {
      current = current.nextNode;
      position--;
    }
    let nextNode = current.nextNode;
    current.nextNode = nextNode.nextNode;
    return nextNode;
  }

  indexOf(node) {
    let current = this.head;
    let position = 0;

    while (current && current.data !== node) {
      current = current.nextNode;
      position++;
    }

    return position;
  }

  findByIndex(index) {
    if (index === 0) return this.head;
    let current = this.head;
    let position = 0;

    while (position < index) {
      current = current.nextNode;
      position++;
    }
    return current;
  }
}

// let l = new LinkedList();

// l.add(1);
// l.add(2);
// l.add(3);
// l.add("Danial");
// l.add("Mostafa");
// l.add("Ali");
// console.log(l.show());
// console.log("###".repeat(10));
// console.log(l.isEmpty());
// console.log("###".repeat(10));
// console.log(l.size());
// console.log("###".repeat(10));
// console.log(l.search("Danial"));
// console.log("###".repeat(10));
// l.insert(4, 3);
// console.log(l.show());
// console.log("###".repeat(10));
// console.log(l.removeByKey("Ali"));
// console.log(l.show());
// console.log("###".repeat(10));
// console.log(l.indexOf(4));
// console.log("###".repeat(10));
// console.log(l.removeByIndex(2));
// console.log(l.show());
