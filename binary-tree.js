/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  nodeMaxSum(rootNode) {
    let leftMax = 0;
    let rightMax = 0;
    if (this.left) {
      leftMax = this.left.nodeMaxSum(rootNode);
    }
    if (this.right) {
      rightMax = this.right.nodeMaxSum(rootNode);
    }
    const passThroughMax = Math.max((Math.max(leftMax, rightMax) + this.val), this.val);
    const topMax = leftMax + rightMax + this.val;
    rootNode.currentMax = Math.max(topMax, rootNode.currentMax);

    return passThroughMax;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    let toVisitStack = [];
    if (this.root) {
      toVisitStack.push([this.root.left, 1]);
      toVisitStack.push([this.root.right, 1]);
    }
    let depth = 0;

    while (toVisitStack.length) {
      let take = toVisitStack.pop();
      let current = take[0];
      let currCount = take[1] + 1;
      
      if (current.left) {
        toVisitStack.push([current.left, currCount]);
      }
      if (current.right) {
        toVisitStack.push([current.right, currCount]);
      }
      if (current.left === null && current.right === null) {
        if (depth === 0 || currCount < depth) {
          depth = currCount;
        }
      }
    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  maxDepth() {
    let toVisitStack = [];
    if (this.root) {
      toVisitStack.push([this.root.left, 1]);
      toVisitStack.push([this.root.right, 1]);
    }
    let depth = 0;

    while (toVisitStack.length) {
      let take = toVisitStack.pop();
      let current = take[0];
      let currCount = take[1] + 1;
      
      if (current.left) {
        toVisitStack.push([current.left, currCount]);
      }
      if (current.right) {
        toVisitStack.push([current.right, currCount]);
      }
      if (current.left === null && current.right === null) {
        if (currCount > depth) {
          depth = currCount;
        }
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  maxSum() {
    this.currentMax = 0;

    if (this.root) {
      const leftMax = this.root.left.nodeMaxSum(this);
      const rightMax = this.root.right.nodeMaxSum(this);
      const topMax = leftMax + rightMax + this.root.val;
      this.currentMax = Math.max(topMax, this.currentMax);
    }

    return this.currentMax;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  nextLarger(lowerBound) {
    let toVisitStack = [this.root];
    let nextLarger = null;
    if (this.root) {
      if (this.root.val > lowerBound) {
        nextLarger = this.root.val;
      }
    }

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current) {
        if (current.val > lowerBound && current.val < nextLarger) {
          nextLarger = current.val;
        }
        toVisitStack.push(current.left);
        toVisitStack.push(current.right);
      }
    }
    return nextLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
