const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
function addNode(node, data) {
  if (!node) return new Node(data);
  if (node.data === data) return node;
  if (data < node.data) {
    node.left = addNode(node.left, data);
  } else {
    node.right = addNode(node.right, data);
  }
  return node;
}

function removeNode(node, data) {
  if (node === null) return null;
  if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else if (data > node.data) {
    node.right = removeNode(node.right, data);
    return node;
  } else {
    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    } else {
      let leftNode = node.left;
      while (leftNode.right) {
        leftNode = leftNode.right;
      }
      node.data = leftNode.data;
      node.left = removeNode(node.left, leftNode.data);
    }
    return node;
  }
}

class BinarySearchTree {
  _rootNode = null;

  root() {
    return this._rootNode;
  }

  add(data) {
    this._rootNode = addNode(this._rootNode, data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let findNode = this._rootNode;

    while (findNode !== null) {
      if (data < findNode.data) {
        findNode = findNode.left;
      } else if (data > findNode.data) {
        findNode = findNode.right;
      } else {
        return findNode;
      }
    }
    return null;
  }

  remove(data) {
    this._rootNode = removeNode(this._rootNode, data);
  }

  min() {
    if (this._rootNode === null) return false;
    let currNode = this._rootNode;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    if (this._rootNode === null) return false;
    let currNode = this._rootNode;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

module
  .exports = {
  BinarySearchTree
};
