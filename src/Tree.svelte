<script>
  import TreeNode from './TreeNode.svelte'
  import NodeBreadcrumb from './NodeBreadcrumb.svelte'
  export let data
  export let currentNode

  if (data && !currentNode) {
    currentNode = data
  }

  const nodeClicked = (event) => {
    currentNode = event.detail.node
  }

</script>

<div class="tree">
  {#if data && currentNode}
    <h1>{currentNode.name}</h1>

    {#if currentNode.parent}
      <NodeBreadcrumb node={currentNode} on:select={nodeClicked} />
    {/if}

    {#if currentNode.children && currentNode.children.length > 0}
    <ul class="tree-children">
      {#each currentNode.children as child}
        <li><TreeNode node={child} on:select={nodeClicked} /></li>
      {/each}
    </ul>
    {/if}
  {:else}
    <p>No data</p>
  {/if}
</div>
