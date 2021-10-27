import React, { Component } from "react";
import FlwLogo from "../icons/flutterwave-logo.svg";

const Header = (props) => {
	return (
		<React.Fragment>
			{/* <div className="woo_flw_header">
        <img className="woo_flutterwave_barter_logo" src={FlwLogo} />
        <h1 className="woo_flw_heading"> Payment Settings</h1>
      </div> */}
			<div class="woocommerce-layout" style={{ width: "100%" }}>
				<div class="woocommerce-layout__header is-scrolled">
					<div class="woocommerce-layout__header-wrapper">
						<h1
							data-wp-c16t="true"
							data-wp-component="Text"
							class="components-truncate components-text woocommerce-layout__header-heading  css-1hk9oxw-Text css-1mm2cvy-View em57xhy0"
						>
							Flutterwave for WooCommerce
						</h1>
					</div>
				</div>
				<div class="components-snackbar-list woocommerce-transient-notices components-notices__snackbar"></div>
			</div>
		</React.Fragment>
	);
};

export default Header;
