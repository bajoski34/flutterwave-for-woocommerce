import React, { Component } from "react";
import FlwLogo from "../icons/flutterwave-logo.svg";

const Header = (props) => {
	return (
		<React.Fragment>
			<div class="flw-woocommerce-layout">
				<div
					class="flw-woocommerce-layout__header"
					style={{ borderBottom: "1px solid rgb(189, 189, 189)" }}
				>
					<div
						class="flw-woocommerce-layout__header-wrapper"
						style={{ borderBottom: "1px solid rgb(189, 189, 189)" }}
					>
						<img
							src={FlwLogo}
							style={{
								height: "14px",
								marginRight: "0.5em",
								alignSelf: "center",
							}}
							alt="Flutterwave"
						/>
						<h1
							style={{
								fontSize: "14px",
								fontFamily: "'FlutterwaveBold'",
								alignSelf: "center",
							}}
						>
							Flutterwave
						</h1>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Header;
