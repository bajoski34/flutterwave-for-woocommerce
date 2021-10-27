/**
 * WordPress dependencies
 */
import { addFilter } from "@wordpress/hooks";
/**
 * Internal dependencies
 */
import Overview from "./App";
import General from "./pages/settings";

const heading = document.querySelector(".woocommerce-layout__header-heading");
addFilter("woocommerce_admin_pages_list", "flutterwave", (pages) => {
	pages.push({
		container: Overview,
		path: "/overview",
		breadcrumbs: ["Flutterwave"],
		navArgs: {
			id: "flutterwave-overview",
		},
	});

	return pages;
});

addFilter("woocommerce_admin_pages_list", "flutterwave", (pages) => {
	pages.push({
		container: General,
		path: "/payments/settings",
		breadcrumbs: ["Flutterwave"],
		navArgs: {
			id: "flutterwave-settings",
		},
	});

	return pages;
});
