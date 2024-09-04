<script lang="ts">
	import ConversionCard from './ConversionCard.svelte';
	export let amounts;
	export let USDPHP;
	export let BTCUSD;
	export let selectedAmount = 0;
</script>

<div class="conversion-grid">
	{#each amounts as amount}
		<ConversionCard {amount} {USDPHP} {BTCUSD} bind:selectedAmount />
	{/each}
</div>

<style>
	.conversion-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
		padding: 20px;
	}
</style>
