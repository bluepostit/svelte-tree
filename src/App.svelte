<script>
  import data from './data'
  import DataNode from './node'
  import Tree from './Tree.svelte'

  const dataTree = DataNode.buildTree(data)
</script>

<main>
  <Tree data={dataTree} />
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
