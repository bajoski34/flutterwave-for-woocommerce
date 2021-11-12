/**
 * WordPress dependencies
 */
import { addFilter } from "@wordpress/hooks";
/**
 * Internal dependencies
 */
import Overview from "./App";
import { Setting, Transaction, Subaccounts, Plans } from "./pages";
// const heading = document.querySelector(".woocommerce-layout__header-heading");

jQuery(".woocommerce-layout__header").addClass("is-scrolled");

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
		container: Setting,
		path: "/payments/settings",
		breadcrumbs: ["Flutterwave Settings"],
		navArgs: {
			id: "flutterwave-settings",
		},
	});

	return pages;
});

addFilter("woocommerce_admin_pages_list", "flutterwave", (pages) => {
	pages.push({
		container: Transaction,
		path: "/flutterwave/transactions",
		breadcrumbs: ["Flutterwave Transactions"],
		navArgs: {
			id: "flutterwave-transactions",
		},
	});

	return pages;
});

addFilter("woocommerce_admin_pages_list", "flutterwave", (pages) => {
	pages.push({
		container: Plans,
		path: "/flutterwave/plans",
		breadcrumbs: ["Flutterwave Plans"],
		navArgs: {
			id: "flutterwave-plans",
		},
	});

	return pages;
});

addFilter("woocommerce_admin_pages_list", "flutterwave", (pages) => {
	pages.push({
		container: Subaccounts,
		path: "/flutterwave/subaccounts",
		breadcrumbs: ["Flutterwave Subaccounts"],
		navArgs: {
			id: "flutterwave-subaccounts",
		},
	});

	return pages;
});
