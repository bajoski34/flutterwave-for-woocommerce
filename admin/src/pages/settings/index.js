/**
 * External dependencies
 */
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Tabs, TabList, Tab } from "@chakra-ui/react";
/**
 * Internal dependencies
 */
import PageContextProvider from "../../provider/PageContextProvider";
import TabSwitcher from "../../components/TabSwitcher";

const colors = {
	brand: {
		900: "#f5a623",
		800: "#f5a623",
		700: "#f5a623",
	},
};
const theme = extendTheme({ colors });

function General() {
	return (
		<ChakraProvider theme={theme}>
			<>
				<PageContextProvider>
					{/* <Header /> */}

					<Tabs colorScheme={colors}>
						<TabList>
							<Tab _selected={{ color: "#f5a623" }}>General</Tab>
							<Tab _selected={{ color: "#f5a623" }}>
								Transactions
							</Tab>
							<Tab _selected={{ color: "#f5a623" }}>
								Payment Plans
							</Tab>
							<Tab _selected={{ color: "#f5a623" }}>
								Subaccounts
							</Tab>
						</TabList>
						<TabSwitcher />
					</Tabs>

					{/* <Tab />
          <TabSwitcher /> */}
				</PageContextProvider>
			</>
		</ChakraProvider>
	);
}
export default General;
