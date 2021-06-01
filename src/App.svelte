<script>
  import data from './data'
  import DataNode from './node'
  import Router from './router'

  const dataTree = DataNode.buildTree(data)
  const router = new Router(dataTree)
  let node = dataTree

  const handleNavigate = (ctx) => {
    if (ctx.nodeToLoad) {
      node = ctx.nodeToLoad
    }
  }
  router.setupPaths(data, handleNavigate)
</script>

<main>
	<h1>{node.name}</h1>
  {#if node.children && node.children.length > 0}
    {#each node.children as child}
      <h2><a href="{router.buildNodeUrlPath(child)}">{child.name}</a></h2>
    {/each}
  {:else}
    <p>No children</p>
  {/if}

  {#if node.parent}
    <a href="{router.buildNodeUrlPath(node.parent)}">Go up</a>
  {/if}
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
