<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let node

  const handleClick = (e) => {
    dispatch('select', {
      node
    })
  }
</script>

<a on:click|preventDefault={handleClick} href="{`/${node.name}`}">{node.name}</a>
