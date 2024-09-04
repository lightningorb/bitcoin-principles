<script lang='ts'>
    import ConversionCard from "./ConversionCard.svelte";
    export let amounts;
    export let USDPHP;
    export let BTCUSD;
    export let selectedAmount = 0;
</script>

{#each amounts as amount}
    <ConversionCard amount={amount} USDPHP={USDPHP} BTCUSD={BTCUSD} bind:selectedAmount={selectedAmount}/>
    <br/>
{/each}