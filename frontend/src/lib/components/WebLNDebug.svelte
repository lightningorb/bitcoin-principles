<script lang="ts">
	import { onMount } from 'svelte';
	import { requestProvider } from 'webln';

	let properties = [];
	let methods = [];
    let info = '';
	let balance = 0;

	let webln: any = null;

	onMount(async () => {
		try {
			console.log('Requesting WebLN provider...');
			webln = await requestProvider();
			console.log('WebLN provider found:', webln);
			properties = Object.getOwnPropertyNames(webln);
			const proto = Object.getPrototypeOf(webln);
			methods = Object.getOwnPropertyNames(proto).filter((key) => typeof webln[key] === 'function');
            info = await webln.getInfo();
			balance = await webln.getBalance();
		} catch (err) {
			console.error('WebLN not available:', err);
		}
	});
</script>

<p>typeof webln: {typeof webln}</p>

<h2>WebLN Properties</h2>
<ul>
	{#each properties as property}
		<li>{property}: {webln[property]}</li>
	{/each}
</ul>

<h2>WebLN Methods</h2>
<ul>
	{#each methods as method}
		<li>{method}</li>
	{/each}
</ul>

<h2>Node info:</h2>

<pre>
{JSON.stringify(info, null, 2)}
</pre>

<h2>Balance</h2>

<pre>
	{JSON.stringify(balance)}
</pre>