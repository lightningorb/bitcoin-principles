<script lang='ts'>
    export let amount: number;
    export let selectedAmount: number;
    export let USDPHP: number;
    export let BTCUSD: number;
    $: active = selectedAmount == amount;
</script>

<button class='value' style="background-color: {active ? 'orange' : 'lightBlue'}; color: {active ? 'white' : 'black'};"
    on:click={() => {
        selectedAmount = amount;
    }}>
    <h2>GCash {amount}PHP</h2>
    <p>{Math.round(amount / USDPHP / BTCUSD * 1e8).toLocaleString()} sats</p>
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
    }
</style>