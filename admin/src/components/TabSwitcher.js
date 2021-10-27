import {
	useCallback,
	useState,
	useEffect,
	useContext,
} from "@wordpress/element";
import React from "react";
import { PageContext } from "../provider/PageContextProvider";
import Settings from "../pages/settings/settings";
import Plan from "../pages/payment-plan";
import Transactions from "../pages/transactions";
import Subaccount from "../pages/subaccounts";

import { TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabSwitcher = () => {
	const { activeTab } = useContext(PageContext);

	return (
		<React.Fragment>
			<TabPanels>
				<TabPanel>
					<Settings />
				</TabPanel>
				<TabPanel>
					<Transactions />
				</TabPanel>
				<TabPanel>
					<Plan />
				</TabPanel>
				<TabPanel>
					<Subaccount />
				</TabPanel>
			</TabPanels>
		</React.Fragment>
	);
};

export default TabSwitcher;
