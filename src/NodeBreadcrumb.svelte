<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let node

  const getParents = (childNode) => {
    const parents = []
    while(childNode.parent) {
      parents.push(childNode.parent)
      childNode = childNode.parent
    }
    return parents.reverse()
  }

  const handleClick = (node) => {
    dispatch('select', { node })
  }

  $: parents = getParents(node)
</script>

<style>
  .node-breadcrumb-element::after {
    content: " > ";
  }

  .node-breadcrumb-element.current-element::after {
    content: none;
  }
</style>

<div class="node-breadcrumb">
  {#each parents as parent}
    <a class="node-breadcrumb-element"
       href="{`/${parent.name}`}"
       on:click|preventDefault={() => handleClick(parent)}>
         {parent.name}
    </a>
  {/each}
  <span class="node-breadcrumb-element current-element"
       href="{`/${node.name}`}"
       on:click|preventDefault={() => handleClick(node)}>
         {node.name}
  </span>
</div>
