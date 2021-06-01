const getMaxDepth = (data) => {
  const children = data.children
  if (!children) {
    return 1
  }
  let maxDepth = 1
  children.forEach((child) => {
    const depth = 1 + getMaxDepth(child)
    maxDepth = Math.max(maxDepth, depth)
  })
  return maxDepth
}

const data = {
  name: 'tree',
  children: [
    {
      name: 'child 1'
    },
    {
      name: 'child 2'
    },
    {
      name: 'child 3',
      children: [
        {
          name: 'grandchild 1'
        },
        {
          name: 'grandchild 2',
          children: [
            {
              name: 'bob',
              children: [
                {
                  name: 'sue'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

console.log(getMaxDepth(data))
