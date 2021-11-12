/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * WooCommerce dependencies
 */
import { registerPaymentMethod } from "@woocommerce/blocks-registry";

/**
 * Internal dependencies
 */
// import ComponentCreditCard from "./component-credit-card";
// import ComponentSavedToken from "./component-saved-token";
import { PAYMENT_METHOD_NAME } from "./constants";
import { getFLUTTERWAVEServerData } from "./flutterwave-utils";

// const Label = (props) => {
// 	const { PaymentMethodLabel } = props.components;

// 	const labelText = getFLUTTERWAVEServerData().title
// 		? getFLUTTERWAVEServerData().title
// 		: __("Flutterwave for WooCommerce", "flutterwave");

// 	return <PaymentMethodLabel text={labelText} />;
// };

// const FLUTTERWAVEComponent = ({ RenderedComponent, ...props }) => {
// 	return <RenderedComponent {...props} />;
// };

registerPaymentMethod({
	name: PAYMENT_METHOD_NAME,
	label: <span>Flutterwave</span>,
	ariaLabel: __("Flutterwave payment method", "flutterwave"),
	canMakePayment: () => true,
	content: <div>Pay with cash Flutterwave.</div>,
	edit: <div>Pay with cash Flutterwave.</div>,
	savedTokenComponent: <div>Flutterwave 3</div>,
	supports: {
		features: ["products"],
	},
});
