import React, { Component } from "react";

const Select = (props) => {
	const options = [
		{
			value: "inline",
			label: "Pop up - (keep payment experience on the website)",
		},
		{ value: "redirect", label: "Redirect - (redirected a hosted page)" },
	];
	return (
		<div className="settingItem">
			<label className="lb">{props.name}</label>
			<select
				className="flw-inputs"
				onChange={props.onChange}
				defaultValue={props.diff}
			>
				<option value="inline">
					Pop up - (keep payment experience on the website)
				</option>
				<option value="hosted">
					Redirect - (redirected a hosted page)
				</option>
			</select>
			<p className="hookInstruct">
				{
					"Choice of payment style to use. Either inline or redirect (Default: Inline)"
				}
			</p>
		</div>
	);
};

export default Select;
