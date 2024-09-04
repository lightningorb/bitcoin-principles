<script lang='ts'>
    import Checkbox from './Checkbox.svelte';
    export let phoneNumber: string = '';
</script>

<h2>Confirm Transaction</h2>
<div><Checkbox label={'PHP'}/></div>
<br/>

<div class='card'>
    <p>Send to GCash</p>
    <h4>{phoneNumber}</h4>
</div>
<br/>

sub total IDR blah
Biaya + IDR fee?
Total IDR blah

Lanjutkan Pembayaran

<style>
    .card {
        background-color: #f3f3f3;
        height: 80px;
        padding: 10px;
        border-radius: 13px;
    }
</style>