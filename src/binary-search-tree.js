const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  _rootNode = null;

  root() {
    return this._rootNode;
  }

  add(data) {
    this._rootNode = this._addNode(data);
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, node = this._rootNode) {
    if (node === null) return null;

    if (node.data > data) {
      return this.find(data, node.left);
    } else if (node.data < data) {
      return this.find(data, node.right);
    }
    return node;
  }

  remove(data) {
    this._rootNode = this._removeNode(data);
  }

  min(node = this._rootNode) {
    if (node === null) return false;

    if (node.left) {
      return this.min(node.left)
    }
    return node.data;
  }

  max(node = this._rootNode) {
    if (node === null) return false;

    if (node.right) {
      return this.max(node.right)
    }
    return node.data;
  }

  _addNode(data, node = this._rootNode) {
    if (!node) return new Node(data);
    if (node.data === data) return node;
    if (data < node.data) {
      node.left = this._addNode(data, node.left);
    } else {
      node.right = this._addNode(data, node.right);
    }
    return node;
  }

  _removeNode(data, node = this._rootNode) {
    if (node === null) return null;

    if (data < node.data) {
      node.left = this._removeNode(data, node.left);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(data, node.right);
      return node;
    }

    if (!node.left) {
      return node.right;
    } else if (!node.right) {
      return node.left;
    }

    let leftNode = node.left;
    while (leftNode.right) {
      leftNode = leftNode.right;
    }
    node.data = leftNode.data;
    node.left = this._removeNode(leftNode.data, node.left);
    return node;
  }
}

module
  .exports = {
  BinarySearchTree
};
