<script lang="ts">
	import { onMount } from 'svelte';
	import Banner from '$lib/components/Banner.svelte';
	import ConversionCards from '$lib/components/ConversionCards.svelte';
	import BTCUSDRateFetcher from '$lib/components/BTCUSDRateFetcher.svelte';
	import USDPHPRateFetcher from '$lib/components/USDPHPRateFetcher.svelte';
	import Swap from '$lib/components/Swap.svelte';
	import PhoneNumber from '$lib/components/PhoneNumber.svelte';
	import { BTCUSD, BTCUSD_age, USDPHP, USDPHP_age } from '$lib/stores';

	import '$lib/global.css';

	let selectedAmount: number | never = 0;
	let amounts: number[] = [500, 1000, 3000, 5000];
	let successes: number = 300;
	let failures: number = 30;
	let refunds: number = 1;
	let phoneNumber: string = '';
	let currentTime = new Date().getTime();
	onMount(() => {
		setInterval(() => {
			currentTime = new Date().getTime();
		}, 1000);
	});
</script>

<Banner />

<BTCUSDRateFetcher />
<USDPHPRateFetcher />

<div style="margin: 10px;">
	<PhoneNumber bind:phoneNumber />

	{#if phoneNumber}
		<p>
			<b>Amount:</b> <span style="float: right; color: #bbb;">*Fees are already included.</span>
		</p>

		{#if $BTCUSD && $USDPHP}
			<ConversionCards {amounts} BTCUSD={$BTCUSD} USDPHP={$USDPHP} bind:selectedAmount />

			<p style="color: #999;">
				1 BTC = {$BTCUSD.toLocaleString()} USD ({Math.round((currentTime - $BTCUSD_age) / 1000)} seconds
				ago).<br /><br />
				1 USD = {(1 / $USDPHP).toLocaleString()} PHP ({Math.round(
					(currentTime - $USDPHP_age) / 1000
				)} seconds ago).<br /><br />
				A total of {successes} successes,
				{failures} by canceled by the user, and {refunds} refunded transactions.
			</p>

			{#if selectedAmount}
				<Swap BTCUSD={$BTCUSD} USDPHP={$USDPHP} {selectedAmount} {phoneNumber} />
			{/if}
		{:else}
			<p>Fetching exchange rates.</p>
		{/if}
	{/if}
</div>
