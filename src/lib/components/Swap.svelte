<script lang='ts'>
    import { slide } from 'svelte/transition';
    import TransactionConfirmation from './TransactionConfirmation.svelte';

    export let phoneNumber: string = '';
    export let selectedAmount: number | never = 0;
    export let BTCUSD: number;
    export let USDPHP: number;
    let swapClicked: boolean = false;

    const handleBackgroundClick = () => swapClicked = false;
</script>

<div>
    {#if swapClicked}
        <div class="background" on:click={handleBackgroundClick}></div>
        <div class="slidingSection" transition:slide>
            <TransactionConfirmation {phoneNumber} />
        </div>
    {/if}
    <button class="swapButton" on:click={() => swapClicked = true}>
        <h3>Swap</h3>
    </button>
</div>

<style>
    .slidingSection {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 400px;
        background-color: white;
        z-index: 2;
        padding: 20px;
        box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px 10px 0px 0px;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .swapButton {
        margin-top: 20px;
    }
</style>
