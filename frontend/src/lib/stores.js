// stores.js
import { writable } from 'svelte/store';

export const BTCUSD = writable(null);
export const USDPHP = writable(null);

export const BTCUSD_age = writable(null);
export const USDPHP_age = writable(null);

export function updateBtcUsdRate(rate, age) {
	BTCUSD.set(rate);
	BTCUSD_age.set(age);
}

export function updateUSDPHPRate(rate, age) {
	USDPHP.set(rate);
	USDPHP_age.set(age);
}
