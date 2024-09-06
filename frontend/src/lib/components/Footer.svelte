<script lang="ts">
    import WebLnDebug from './WebLNDebug.svelte';
	import { onMount } from 'svelte';
	import { requestProvider } from 'webln';

	let webln: any = null;
	let showDebug: boolean = false;

	onMount(async () => {
		try {
			webln = await requestProvider();
		} catch (err) {
		}
	});
</script>

<br/>
<br/>

<hr style='color: #aaa'/>

{#if typeof webln == 'object'}
	WebLN enabled.
	<br/>
	<br/>
	<button on:click={() => showDebug = !showDebug}>{showDebug ? 'Hide' : 'Show'} WebLN debug info</button>
{:else}
	WebLN unavailable.
{/if}

{#if showDebug}
	<WebLnDebug />
{/if}