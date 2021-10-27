/**
 * External dependencies
 */

//import React, { useState, useEffect } from "react";
import { useCallback, useState, useEffect } from "@wordpress/element";
// import { __ } from "@wordpress/i18n";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useClipboard } from "@chakra-ui/react";

/**
 * Internal dependencies
 */
import { NAMESPACE, STORE_NAME } from "../../constants";
// import { useIsWCFLutterwaveEnabled, useTestMode } from "./data";
import Checkbox from "../../components/Checkbox";
import Webhook from "../../components/Webhook";
import Input from "../../components/InputField";
import Select from "../../components/Select";
import Button from "../../components/CallToAction";

const Settings = () => {
	const [checkboxSettings, setCheckboxSettings] = useState({
		isWCFlutterwaveEnabled: false,
		autocompleteOrder: false,
		goLive: false,
		logging: false,
		barter: false,
	});

	const [publickey, setPublicKey] = useState(
		"FLWPUBK-XXXXXXXXXXXXXXXXXXXXXXX-X"
	);
	const [secretkey, setSecretKey] = useState(
		"FLWSECK-XXXXXXXXXXXXXXXXXXXXXXX-X"
	);
	const [testpublickey, setTestPublicKey] = useState(
		"FLWPUBK_TEST-XXXXXXXXXXXXXXXXXX-X"
	);
	const [testsecretkey, setTestSecretKey] = useState(
		"FLWSECK_TEST-XXXXXXXXXXXXXXXXXX-X"
	);
	const [paymentStyle, setPaymentStyle] = useState("inline");
	const [paymentOptions, setpaymentOptions] = useState("");
	const [secrethash, setSecretHash] = useState(uuidv4()); //generate randow string....[ init ]
	const [paymentDesc, setPaymentDesc] = useState("");
	const { hasCopied, onCopy } = useClipboard(secrethash);
	const [loader, setLoader] = useState("Save Changes");

	const url = `${flutterwave_data.apiUrl}${NAMESPACE + STORE_NAME}`;
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoader("Saving...");
		axios
			.post(
				url,
				{
					is_wcflutterwave_enabled:
						checkboxSettings.isWCFlutterwaveEnabled,
					test_public_key: testpublickey,
					test_secret_key: testsecretkey,
					live_public_key: publickey,
					live_secret_key: secretkey,
					autocomplete_order: checkboxSettings.autocompleteOrder,
					go_live: checkboxSettings.goLive,
					disable_logging: checkboxSettings.logging,
					payment_options: paymentOptions,
					payment_style: paymentStyle || "inline",
					disable_barter: checkboxSettings.barter,
					secret_hash: secrethash,
					description: paymentDesc,
				},
				{
					headers: {
						"content-type": "application/json",
						"X-WP-NONCE": flutterwave_data.nonce,
					},
				}
			)
			.then((res) => {
				setLoader("Save Settings");
				window.location.reload();
			});
	};

	const handleCheckboxChange = (e) => {
		const name = e.target.name;
		const value = e.target.checked;
		setCheckboxSettings({ ...checkboxSettings, [name]: value });
	};

	// const handleCheckboxChange = (e) => {
	//   const target = e.target;
	//   const value = target.checked;
	//   const name = target.name;

	//   setCheckOptions({
	//     [name]: value,
	//   });
	// };

	useEffect(() => {
		axios.get(url).then((res) => {
			const {
				is_flutterwave_enabled,
				live_public_key,
				live_secret_key,
				test_public_key,
				test_secret_key,
				autocomplete_order,
				disable_logging,
				payment_style,
				payment_options,
				disable_barter,
				secret_hash,
				go_live,
				description,
			} = res.data;
			//   console.log(res.data);
			setCheckboxSettings({
				isWCFlutterwaveEnabled: is_flutterwave_enabled,
				goLive: go_live,
				autocompleteOrder: autocomplete_order,
				logging: disable_logging,
				barter: disable_barter,
			});
			setPublicKey(live_public_key);
			setSecretKey(live_secret_key);
			setTestPublicKey(test_public_key);
			setTestSecretKey(test_secret_key);
			setPaymentStyle(payment_style);
			setpaymentOptions(payment_options);
			if (!secret_hash) {
				setSecretHash(uuidv4());
			} else {
				setSecretHash(secret_hash);
			}
			setPaymentDesc(description);
		});
	}, []);

	return (
		<React.Fragment>
			<form
				className="flw-woo-settings-page"
				onSubmit={(e) => handleSubmit(e)}
			>
				<div className="flw_container">
					<div className="flw-row">
						<Checkbox
							checked={checkboxSettings.isWCFlutterwaveEnabled}
							value={
								checkboxSettings.isWCFlutterwaveEnabled ? 1 : 0
							}
							onChange={(e) => handleCheckboxChange(e)}
							name={"Enable/Disable"}
							sname={"isWCFlutterwaveEnabled"}
							details={"Enable Flutterwave"}
						/>
					</div>
					<div className="flw-row">
						<Checkbox
							checked={checkboxSettings.logging}
							value={checkboxSettings.logging ? 1 : 0}
							onChange={(e) => handleCheckboxChange(e)}
							name={"Enable/Disable logging"}
							sname={"logging"}
							details={"Enable or Disable Logging"}
						/>
					</div>
					<div className="flw-row">
						<Webhook
							name={"Webhook instruction"}
							hookURL={flutterwave_data.webhook}
						/>
					</div>
					<div className="flw-row">
						<Input
							name={"Payment method (optional)"}
							value={"Flutterwave"}
							type={"text"}
						/>
					</div>
					<div className="flw-row">
						<Input
							name={"Flutterwave Test Public Key"}
							value={testpublickey}
							type={"text"}
							onChange={(e) => {
								setTestPublicKey(e.target.value);
							}}
						/>
					</div>

					<div className="flw-row">
						<Input
							name={"Flutterwave Live Public Key"}
							value={publickey}
							type={"text"}
							onChange={(e) => {
								setPublicKey(e.target.value);
							}}
						/>
					</div>

					<div className="flw-row">
						<Select
							name={"Payment style on checkout (optional)"}
							value={paymentStyle}
							diff="inline"
							onChange={(e) => setPaymentStyle(e.target.value)}
						/>
					</div>
				</div>

				<div className="flw_container">
					<div className="flw-row">
						<Checkbox
							checked={checkboxSettings.goLive}
							value={checkboxSettings.goLive ? 1 : 0}
							onChange={(e) => handleCheckboxChange(e)}
							name={"Mode"}
							sname={"goLive"}
							details={"Switch to live account"}
						/>
					</div>
					<div className="flw-row">
						<Checkbox
							checked={checkboxSettings.barter}
							value={checkboxSettings.barter ? 1 : 0}
							onChange={(e) => handleCheckboxChange(e)}
							name={"Disable Barter"}
							sname={"barter"}
							details={"Remove Barter"}
						/>
					</div>
					<div className="flw-row">
						<Input
							name={"Secret Hash"}
							value={secrethash}
							onChange={(e) => {
								setSecretHash(e.target.value);
							}}
							onClick={onCopy}
							type={"text"}
							inputWidth={"100%"}
							bottomNote={
								"Ensure that SECRET HASH is the same with the one on dashboard"
							}
						/>
					</div>
					<div className="flw-row">
						<Input
							name={"Payment method description (optional)"}
							value={paymentDesc}
							inputWidth={"132%"}
							type={"text"}
							onChange={(e) => {
								setPaymentDesc(e.target.value);
							}}
						/>
					</div>

					<div className="flw-row">
						<Input
							name={"Flutterwave Test Secret Key"}
							value={testsecretkey}
							inputWidth={"185%"}
							type={"text"}
							onChange={(e) => {
								setTestSecretKey(e.target.value);
							}}
						/>
					</div>

					<div className="flw-row">
						<Input
							name={"Flutterwave Live Secret Key"}
							value={secretkey}
							inputWidth={"185%"}
							type={"text"}
							onChange={(e) => {
								setSecretKey(e.target.value);
							}}
						/>
					</div>

					<div className="cta">
						<Button
							name={"Cancel"}
							bg={"#828282"}
							color={"#ffffff"}
						/>
						<Button name={loader} bg={"#F5A623"} color={"black"} />
					</div>
				</div>
			</form>
		</React.Fragment>
	);
};

export default Settings;
