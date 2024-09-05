<script lang="ts">
	import Wallet from '$lib/components/Wallet.svelte';
	import Dot from '$lib/components/Dot.svelte';
</script>

<h1 class="banner">
	<span class="lightning">Lightning</span> to <span class="gcash">GCash</span>
	<Wallet />
	<Dot />
</h1>

<style>
	.banner {
		background-color: #ededed;
		margin: 0px;
		padding: 5px;
		font-size: 1.3em;
	}
	.lightning {
		color: orange;
	}
	.gcash {
		color: blue;
	}
</style>
