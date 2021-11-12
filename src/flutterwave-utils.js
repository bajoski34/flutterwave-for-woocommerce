/**
 * WooCommerce dependencies
 */
import { getSetting } from "@woocommerce/settings";

/**
 * Flutterwave data
 */
export const getFLUTTERWAVEServerData = () => {
	const flutterwaveServerData = getSetting(
		"woocommerce_flutterwave_settings",
		null
	);
	if (!flutterwaveServerData || typeof flutterwaveServerData !== "object") {
		throw new Error("Flutterwave initialization data is not available");
	}
	return flutterwaveServerData;
};
