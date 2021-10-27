import React from "react";
import {
	useCallback,
	useState,
	useEffect,
	useContext,
} from "@wordpress/element";
import { PageContext } from "../provider/PageContextProvider";

const Tab = () => {
	const options = ["General", "Transactions", "Payment Plans", "Subaccounts"];
	const { activeTab, setActiveTab } = useContext(PageContext);
	// const [activeTab, setActiveTab] = useState(0);
	return (
		<React.Fragment>
			<div className="flw-tab-container">
				{options.map((option, index) => {
					return (
						<button
							className={`TabOptions ${
								index === activeTab && "activeTab"
							}`}
							key={index}
							onClick={() => setActiveTab(index)}
						>
							<span className="tabText">{option}</span>
						</button>
					);
				})}
				<hr />
			</div>
		</React.Fragment>
	);
};

export default Tab;
