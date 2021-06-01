class Node {
  constructor(data, parent = null) {
    this.nodeData = data
    this.parentNode = parent
    this.childNodes = []
  }

  get data() {
    return this.nodeData
  }

  get name() {
    return this.data.name || null
  }

  get parent() {
    return this.parentNode
  }

  get children() {
    return this.childNodes
  }

  set children(children) {
    this.childNodes = children
  }

  static buildTree(data, parent = null) {
    let children = data.children || []
    const node = new Node(data, parent)
    children = children.map(child => this.buildTree(child, node))
    node.children = children
    return node
  }

  static getMaxDepth(data) {
    const children = data.children
    if (!children) {
      return 1
    }
    let maxDepth = 1
    children.forEach((child) => {
      const depth = 1 + this.getMaxDepth(child)
      maxDepth = Math.max(maxDepth, depth)
    })
    return maxDepth
  }
}

export default Node
