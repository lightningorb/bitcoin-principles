<script lang="ts">
	import { onMount } from 'svelte';
	import { updateBtcUsdRate } from '$lib/stores';

	const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
	const storageKey = 'btcUsdRate';
	const maxAge = 60000;

	let getData = () => {
		const savedData = localStorage.getItem(storageKey);
		if (savedData) {
			const parsedData = JSON.parse(savedData);
			const currentTime = new Date().getTime();
			if (currentTime - parsedData.timestamp < maxAge) {
				updateBtcUsdRate(parsedData.value, parsedData.timestamp);
				console.log(`Using cached value: 1 BTC = ${parsedData.value} USD`);
				return;
			}
		}
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				const btcUsdRateValue = data.bitcoin.usd;
				const currentTime = new Date().getTime();
				updateBtcUsdRate(btcUsdRateValue, currentTime);
				console.log(`Fetched from API: 1 BTC = ${btcUsdRateValue} USD`);
				const newData = {
					value: btcUsdRateValue,
					timestamp: currentTime
				};
				localStorage.setItem(storageKey, JSON.stringify(newData));
			})
			.catch((error) => {
				console.error('Error fetching BTC/USD rate:', error);
			});
	};

	onMount(() => {
		getData();
		setInterval(getData, 61 * 1000);
	});
</script>
