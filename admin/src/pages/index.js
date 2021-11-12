/**
 * External dependencies
 */
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
/**
 * Internal dependencies
 */
import Settings from "./settings";
import Transactions from "./transactions";
import Subaccount from "./subaccounts";
import Plan from "./payment-plan";
import Header from "../components/Header";

const colors = {
	brand: {
		900: "#f5a623",
		800: "#f5a623",
		700: "#f5a623",
	},
};
const theme = extendTheme({ colors });

export function Setting() {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Settings />
		</ChakraProvider>
	);
}

export function Transaction() {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Transactions />
		</ChakraProvider>
	);
}

export function Subaccounts() {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Subaccount />
		</ChakraProvider>
	);
}

export function Plans() {
	return (
		<ChakraProvider theme={theme}>
			<Header />
			<Plan />
		</ChakraProvider>
	);
}
