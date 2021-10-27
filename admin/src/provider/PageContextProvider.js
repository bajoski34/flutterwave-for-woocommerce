import React, { useState, useEffect, createContext } from "react";
export const PageContext = createContext();
const PageContextProvider = (props) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<PageContext.Provider
			value={{
				activeTab,
				setActiveTab,
			}}
		>
			{props.children}
		</PageContext.Provider>
	);
};
export default PageContextProvider;
