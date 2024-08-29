
<script lang='ts'>
    import ConversionCards from '$lib/components/ConversionCards.svelte'
    import RateFetcher from '$lib/components/RateFetcher.svelte';
    import { BTCUSD } from '$lib/stores';

    let amounts = [500, 1000, 3000, 5000];
    let USDPHP = 56;
    let successes = 300;
    let failures = 30;
    let refunds = 1;
</script>

<RateFetcher/>

<h1>Lightning sa GCash</h1>
<p>Numero ng telepono</p>
<input type='text' placeholder='09xxxxxxxxx'/>
<p>Halaga</p>

{#if $BTCUSD}

<ConversionCards {amounts} BTCUSD={$BTCUSD} {USDPHP}/>

<p>
    1 BTC = {($BTCUSD * USDPHP).toLocaleString()} PHP (1 minuto ang nakalipas). Kabuuan ng {successes} matagumpay, {failures} kinansela ng gumagamit, {refunds} ibinalik.
</p>

{:else}

<p>
    Fetching exchange rates.
</p>

{/if}