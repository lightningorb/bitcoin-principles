
<script lang='ts'>
    import Wallet from '$lib/components/Wallet.svelte';
    import ConversionCards from '$lib/components/ConversionCards.svelte'
    import RateFetcher from '$lib/components/RateFetcher.svelte';
    import { BTCUSD } from '$lib/stores';

    import '$lib/global.css';

    let selectedAmount = 0;
    let amounts = [500, 1000, 3000, 5000];
    let USDPHP = 56;
    let successes = 300;
    let failures = 30;
    let refunds = 1;
</script>

<RateFetcher/>

<h1 class='banner'><span class='lightning'>Lightning</span> to <span class='gcash'>GCash <Wallet/> </span></h1>

<div style='margin: 10px;'>
    <p><b>Phone number</b></p>
    <input type='text' placeholder='09xxxxxxxxx'/>

    <p><b>Amount:</b> <span style='float: right; color: #bbb;'>*Fees are already included.</span></p>

    {#if $BTCUSD}

    <ConversionCards {amounts} BTCUSD={$BTCUSD} {USDPHP} bind:selectedAmount={selectedAmount}/>

    <p style='color: #999;'>
        1 BTC = {($BTCUSD * USDPHP).toLocaleString()} PHP (1 minute ago). A total of {successes} successes, {failures} by canceled by the user, and {refunds} refunded transactions.
    </p>

    {selectedAmount}

    {:else}

    <p>
        Fetching exchange rates.
    </p>

    {/if}
</div>

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