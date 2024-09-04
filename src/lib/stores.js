// stores.js
import { writable } from 'svelte/store';

export const BTCUSD = writable(null);

export function updateBtcUsdRate(rate) {
	BTCUSD.set(rate);
}
