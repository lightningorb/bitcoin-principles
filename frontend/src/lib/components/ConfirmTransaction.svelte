<script lang='ts'>
    export const totalSats: number = 0;
	import { requestProvider } from 'webln';
	import { onMount } from 'svelte';

	let webln: any = null;

	onMount(async () => {
		try {
			webln = await requestProvider();
		} catch (err) {
			console.error('WebLN not available:', err);
		}
	});

    const doTransaction = async () => {
        await webln.enable();
		// this will likely be a keysend for totalSats
        const resp = await webln.sendPayment("lnbc100n1pndhqa8dqqpp5qzcvg52dhgldl7td4pg9x8y95ke4u0guv8ghzdqtth00wmp62lzssp5ymcwlp4lprnaqmsczae37cxqsmneqzg7xplsvsz7325qkmkwfy0q9qrsgqcqpjnp4qvcyl886mg0rfdh4dtfqu83ptmr7d30e3l7654yr3l2e34w9rv6awxqyz5vqrzjqtwnlnd2z7umeqalwyu0h6596r5r8pdx3d0u37vnxevv3msyv38ksqqqqqqqqqqqryqqqqqqqqqqqqqqrc6p5xu3d46zpuxyd855ljhyeeym9a90ml0wt8uu87lazfng57zzdkl659v5v2e0xnzxldvusyzvd2246w276gx0pypympyfdcp4pl60gqgatx9y");
        alert(JSON.stringify(resp));
    }

</script>

<button class="swapButton" on:click={doTransaction}>
	<h2>Confirm Transaction</h2>
</button>
