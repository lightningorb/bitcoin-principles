<script lang="ts">
	export let amount: number;
	export let selectedAmount: number;
	export let USDPHP: number;
	export let BTCUSD: number;
	$: active = selectedAmount == amount;

	let commonTransform =
		'translateX(60px) translateY(50px) rotateZ(-20deg) rotateX(55deg) skewX(10deg)';

	let notes: string[] = [];
	let thousands = Math.floor(amount / 1000);
	let remainder = amount % 1000;

	for (let i = 0; i < thousands; i++) notes.push('1000.jpg');
	if (remainder === 500) notes.push('500.jpg');
</script>

<button
	class="value"
	style="
		color: {active ? 'white' : 'black'}; 
		background-color: {active ? 'orange' : 'lightBlue'};
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 10px;
	"
	on:click={() => {
		selectedAmount = amount;
	}}
>
	<h2 style="margin: 0;">GCash {amount}PHP</h2>
	<p style="margin: 0;">{Math.round(((amount * USDPHP) / BTCUSD) * 1e8).toLocaleString()} sats</p>

	{#each notes as note, index}
		<div
			class="note"
			style="
				background-image: url('./{note}');
				transform: {commonTransform} 
				{active && index === notes.length - 1 ? 'translateY(-10px)' : ''}
				translateY({index * -2}px);
			"
		></div>
	{/each}
</button>

<style>
	.value {
		text-align: left;
		border-radius: 10px;
		padding: 10px;
		max-width: 180px;
		width: 180px;
		max-height: 180px;
		height: 180px;
		border-color: transparent;
		margin-top: 10px;
		position: relative;
		transition: all 0.3s ease;
		background-color: lightblue;
		overflow: hidden;
	}

	.note {
		width: 100%;
		height: 100px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: absolute;
		transition: transform 0.3s ease;
		transform-origin: center;
	}

	h2,
	p {
		margin: 0;
	}
</style>
