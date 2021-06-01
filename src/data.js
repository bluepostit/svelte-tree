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
          name: 'grandchild 2'
        }
      ]
    },
    {
      name: '테스트 유닛',
      children: [
        {
          name: 'grandchild 1',
          children: [
            {
              name: 'great-grandchild 1'
            }
          ]
        }
      ]
    }
  ]
}

export default data
