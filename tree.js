/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    let toVisitStack = [this];
    let sum = 0;
    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current.children) {
        for (let child of current.children) {
          toVisitStack.push(child);
        }
      }

    }
    return sum;
  };

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
