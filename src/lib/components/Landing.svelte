<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import ConversionCards from '$lib/components/ConversionCards.svelte';
	import RateFetcher from '$lib/components/RateFetcher.svelte';
	import Swap from '$lib/components/Swap.svelte';
	import PhoneNumber from '$lib/components/PhoneNumber.svelte';
	import { BTCUSD } from '$lib/stores';

	import '$lib/global.css';

	let selectedAmount: number | never = 0;
	let amounts: number[] = [500, 1000, 3000, 5000];
	let USDPHP: number = 56;
	let successes: number = 300;
	let failures: number = 30;
	let refunds: number = 1;
	let phoneNumber: string = '';
</script>

<Banner/>

<RateFetcher />

<div style="margin: 10px;">
	<PhoneNumber bind:phoneNumber />

	{#if phoneNumber}
		<p>
			<b>Amount:</b> <span style="float: right; color: #bbb;">*Fees are already included.</span>
		</p>

		{#if $BTCUSD}
			<ConversionCards {amounts} BTCUSD={$BTCUSD} {USDPHP} bind:selectedAmount />

			<p style="color: #999;">
				1 BTC = {($BTCUSD * USDPHP).toLocaleString()} PHP (1 minute ago). A total of {successes} successes,
				{failures} by canceled by the user, and {refunds} refunded transactions.
			</p>

			{#if selectedAmount}
				<Swap BTCUSD={$BTCUSD} {USDPHP} {selectedAmount} {phoneNumber} />
			{/if}
		{:else}
			<p>Fetching exchange rates.</p>
		{/if}
	{/if}
</div>