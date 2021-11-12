import React, { useState, useEffect } from "react";
import Hyperlink from "../icons/hyperlink.svg";
const Webhook = (props) => {
	return (
		<div className="settingItem">
			<label className="wb-lb">{props.name}</label>
			<p className="hookInstruct">
				Copy this webhook URL and paste on the webhook section on your
				dashboard
			</p>
			<p className="hookURL">{props.hookURL}</p>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginTop: "5px",
				}}
			>
				<a
					className="refLink"
					href="https://dashboard.flutterwave.com"
					target="_blank"
				>
					Flutterwave account
				</a>
				{/* <ExternalLink href={"https://dashboard.flutterwave.com"}>
					{"Flutterwave account"}
				</ExternalLink> */}
				<img src={Hyperlink} width="16px" height="16px" />
			</div>
		</div>
	);
};

export default Webhook;
