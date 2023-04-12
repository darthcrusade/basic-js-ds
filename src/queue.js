const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  _nodeList;

  getUnderlyingList() {
    return this._nodeList;
  }

  enqueue(value) {
    if (!this._nodeList) {
      this._nodeList = new ListNode(value);
    } else {
      let currentNode = this._nodeList;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this._nodeList) {
      const value = this._nodeList.value;
      this._nodeList = this._nodeList.next;
      return value;
    }
  }
}

module.exports = {
  Queue
};
