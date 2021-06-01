import page from 'page'
import DataNode from './node'

class Router {
  constructor(dataTree) {
    this.dataTree = dataTree
  }

  loadNode(ctx, next) {
    const keyword = 'name'
    const params = ctx.params
    let node
    let foundNode = this.dataTree

    for (let i = 0; i < Object.keys(params).length; i++) {
      const param = `${keyword}${i}`
      const name = params[param]
      if (foundNode.children && i > 0) {
        foundNode = foundNode.children.find(child => child.name === name)
      }
    }
    if (foundNode) {
      node = foundNode
    }
    ctx.nodeToLoad = node
    next()
  }

  buildNodeUrlPath(node) {
    let path = node.name
    if(node.parent) {
      let parentPath = this.buildNodeUrlPath(node.parent)
      path = `${parentPath}/${path}`
    } else {
      path = `/data/${path}`
    }
    return path
  }

  setupPaths(data, handler) {
    const maxDepth = DataNode.getMaxDepth(data)
    for (let i = 0; i < maxDepth; i++) {
      const prefix = '/data'
      const sections = []
      for (let j = 0; j <= i; j++) {
        sections.push(`/:name${j}`)
      }
      const path = prefix + sections.join('')
      const loadNode = (ctx, next) => {
        this.loadNode(ctx, next)
      }
      page(path, loadNode, handler)
    }
    page.start()
  }
}

export default Router
