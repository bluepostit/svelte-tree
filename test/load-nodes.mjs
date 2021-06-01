import Node from '../src/node.js'
import data from './data.mjs'

const tree = Node.buildTree(data)
console.log(tree)

console.log(tree.children[0].data.name)
console.log(tree.children[0].parent.data.name)
console.log(tree.children[2].children[0].parent.parent.data.name)
