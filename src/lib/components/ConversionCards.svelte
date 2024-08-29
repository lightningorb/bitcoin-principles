<script lang='ts'>
    export let amounts;
    export let USDPHP;
    export let BTCUSD;
</script>

{#each amounts as amount}

<div style="background-color: lightblue; border-radius: 10px; padding: 10px; max-width: 200px;">
    <p>GCash {amount}PHP</p>
    <p>{Math.round(amount / USDPHP / BTCUSD * 1e8).toLocaleString()} sats</p>
</div>
<br/>

{/each}