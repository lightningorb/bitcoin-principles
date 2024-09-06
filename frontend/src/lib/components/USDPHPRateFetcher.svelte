<script lang="ts">
	import { onMount } from 'svelte';
	import { updateUSDPHPRate } from '$lib/stores';

	const usdPhpApiUrl = 'https://www.floatrates.com/daily/php.json';
	const usdPhpStorageKey = 'usdPhpRate';
	const maxAge = 60000;

	let getData = () => {
		const savedData = localStorage.getItem(usdPhpStorageKey);
		if (savedData) {
			const parsedData = JSON.parse(savedData);
			const currentTime = new Date().getTime();
			if (currentTime - parsedData.timestamp < maxAge) {
				updateUSDPHPRate(parsedData.value, parsedData.timestamp);
				console.log(`Using cached value: 1 USD = ${parsedData.value} PHP`);
				return;
			}
		}
		fetch(usdPhpApiUrl)
			.then((response) => response.json())
			.then((data) => {
				const usdPhpRateValue = data.usd.rate;
				const dateInMs = new Date(data.usd.date).getTime();
				updateUSDPHPRate(usdPhpRateValue, dateInMs);
				console.log(`Fetched from API: 1 USD = ${usdPhpRateValue} PHP`);
				const newData = {
					value: usdPhpRateValue,
					timestamp: dateInMs
				};
				localStorage.setItem(usdPhpStorageKey, JSON.stringify(newData));
			})
			.catch((error) => {
				console.error('Error fetching USD/PHP rate:', error);
			});
	};

	onMount(() => {
		getData();
		setInterval(getData, 60 * 1000);
	});
</script>
