<script>
    let amounts = [500, 1000, 3000, 5000];
    let BTCUSD = 59000;
    let USDPHP = 56;
    let successes = 300;
    let failures = 30;
    let refunds = 1;
</script>

<h1>Lightning sa GCash</h1>
<p>Numero ng telepono</p>
<input type='text' placeholder='09xxxxxxxxx'/>
<p>Halaga</p>

{#each amounts as amount}

<div style="background-color: lightblue; border-radius: 10px; padding: 10px; max-width: 200px;">
    <p>GCash {amount}PHP</p>
    <p>{Math.round(amount / USDPHP / BTCUSD * 1e8).toLocaleString()} sats</p>
</div>
<br/>

{/each}

<p>
    1 BTC = {(BTCUSD * USDPHP).toLocaleString()} PHP (1 minuto ang nakalipas). Kabuuan ng {successes} matagumpay, {failures} kinansela ng gumagamit, {refunds} ibinalik.
</p>