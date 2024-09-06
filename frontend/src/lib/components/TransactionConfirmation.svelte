<script lang="ts">
	import Wallet from '$lib/components/Wallet.svelte';
	import Checkbox from './Checkbox.svelte';
	import ConfirmTransaction from './ConfirmTransaction.svelte';

	export let phoneNumber: string = '';
	export let selectedAmount: number | never = 0;
	export let BTCUSD: number;
	export let USDPHP: number;

	let feePercentage = 0.08;

	$: subTotalSats = Math.round(((selectedAmount * USDPHP) / BTCUSD) * 1e8)
	$: feeSats = subTotalSats * feePercentage;
	$: totalSats = subTotalSats + feeSats;

	$: subTotal = isChecked ? subTotalSats : selectedAmount;
	$: fee = subTotal * feePercentage;
	$: total = subTotal + fee;
	$: currency = isChecked ? 'sats' : 'PHP';

	let isChecked = false;
</script>

<table width="100%">
	<tr>
		<td>
			<h2>Confirm Transaction <Wallet /></h2>
		</td>
		<td>
			<span style="float: right;"><Checkbox bind:isChecked label={'PHP'} /></span>
		</td>
	</tr>
</table>
<br />

<div class="card">
	<p>Send to GCash</p>
	<h2 style="color: #666;">{phoneNumber}</h2>
</div>
<br />

<table width="100%">
	<tr>
		<td>
			<h2 style="margin: 5px 0;">Sub Total</h2>
		</td>
		<td>
			<span style="float: right;">{subTotal.toLocaleString() + ' ' + currency}</span>
		</td>
	</tr>
	<tr>
		<td>
			<h2 style="margin: 5px 0;">Cost</h2>
		</td>
		<td>
			<span style="float: right;">{fee.toLocaleString() + ' ' + currency}</span>
		</td>
	</tr>
	<tr>
		<td>
			<h2 style="margin: 5px 0;">Total</h2>
		</td>
		<td>
			<span style="float: right;">{total.toLocaleString() + ' ' + currency}</span>
		</td>
	</tr>
</table>

<br />

<ConfirmTransaction {totalSats}/>

<style>
	.card {
		background-color: #f3f3f3;
		padding: 10px;
		border-radius: 13px;
	}
</style>
