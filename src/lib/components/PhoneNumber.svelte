<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let phoneNumber: string = '';
	let unvalidatedPhoneNumber: string = '';
	let errorMessage: string = '';

	function validatePhoneNumber() {
		errorMessage = '';

		if (unvalidatedPhoneNumber.length !== 13) {
			errorMessage = 'Phone number incomplete.';
			return false;
		}

		if (!unvalidatedPhoneNumber.startsWith('+63')) {
			errorMessage = 'Phone number must start with +63.';
			return false;
		}

		const numberPart = unvalidatedPhoneNumber.slice(3);
		if (!/^\d+$/.test(numberPart)) {
			errorMessage = 'Phone number must contain only digits after +63.';
			return false;
		}

		return true;
	}

	onMount(() => {
		if (browser && localStorage.getItem('phoneNumber')) {
			console.log('Reading phone number from local storage');
			phoneNumber = localStorage.getItem('phoneNumber') || '';
			unvalidatedPhoneNumber = phoneNumber;
		}
	});

	$: {
		if (validatePhoneNumber()) {
			phoneNumber = unvalidatedPhoneNumber;
		} else {
			phoneNumber = '';
		}
		if (browser && phoneNumber) {
			console.log('Writing phone number to local storage', phoneNumber);
			localStorage.setItem('phoneNumber', phoneNumber);
		}
	}
</script>

<p><b>Phone number</b></p>
<input
	class="phoneNumber"
	type="text"
	bind:value={unvalidatedPhoneNumber}
	placeholder="09xxxxxxxxx"
	autocomplete="off"
/>
{#if errorMessage}
	<div>{errorMessage}</div>
{/if}

<style>
	.phoneNumber {
		width: 97%;
		height: 3em;
		padding-left: 15px;
		border-radius: 10px;
		border-width: 0.1em;
	}
</style>
