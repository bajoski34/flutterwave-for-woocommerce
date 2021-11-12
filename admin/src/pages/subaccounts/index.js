/**
 * External dependencies
 */
import React from "react";
import { useCallback, useState, useEffect } from "@wordpress/element";
import axios from "axios";
import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	CloseButton,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputLeftAddon,
	Button,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	extendTheme,
	ChakraProvider,
} from "@chakra-ui/react";
/**
 * Internal dependencies
 */

import {
	BASE_URL,
	SUBACCOUNTS,
	NAMESPACE,
	STORE_NAME,
	BANKS,
} from "../../constants";
import TableComp from "../table";
// import { useFetch } from "../../hooks";

const Subaccount = () => {
	const [loading, setLoading] = useState(true);
	const [flwerror, setFlwError] = useState({});
	const [subaccounts, setSubaccounts] = useState([]);
	const [banks, setBanks] = useState([]);
	const [selectedBank, setSelectedBank] = useState(0);
	const [selectedName, setSelectedName] = useState("");
	const [selectedAccountNumber, setSelectedAccountNumber] = useState(0);
	const [selectedEmail, setSelectedEmail] = useState("");
	const [selectedPhone, setSelectedPhone] = useState("");
	const [selectedPhoneCountryCode, setSelectedPhoneCountryCode] = useState(
		"+234"
	);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedSplitValue, setSelectedSplitValue] = useState(0.5);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const url = `${flutterwave_data.apiUrl}${NAMESPACE + SUBACCOUNTS}`;
	const createSubaccounthandler = () => {
		let payload = {
			account_bank: selectedBank,
			business_name: selectedName,
			account_number: selectedAccountNumber,
			business_email: selectedEmail,
			business_mobile: selectedPhone,
			country: selectedCountry,
			split_value: selectedSplitValue,
			split_type: "percentage",
		};

		axios.post(url, payload).then((res) => {
			console.log(res.data);
			if (res.data.status == "error") {
				setFlwError({ message: res.data.message });
			}
		});

		window.location.reload();
	};

	const onCountryChange = (e) => {
		setSelectedCountry(e.target.value);
		const getbanksurl = `${flutterwave_data.apiUrl}${NAMESPACE + BANKS}`;
		axios
			.post(getbanksurl, {
				country: e.target.value,
			})
			.then((res) => {
				setBanks(res.data.data);
			});

		switch (e.target.value) {
			case "GH":
				setSelectedPhoneCountryCode("+233");
				break;
			case "KE":
				setSelectedPhoneCountryCode("+254");
				break;
			case "UG":
				setSelectedPhoneCountryCode("+256");
				break;
			case "TZ":
				setSelectedPhoneCountryCode("+255");
				break;
			default:
				setSelectedPhoneCountryCode("+234");
				break;
		}
	};

	const heading = ["Subaccount ID", "Business Name", "Bank Name", "Country"];
	const colors = {
		brand: {
			900: "#f5a623",
			800: "#f5a623",
			700: "#f5a623",
		},
	};

	const theme = extendTheme({ colors });

	useEffect(() => {
		axios.get(url).then((res) => {
			const { ...data } = res.data.data;
			let arr = [];
			Object.keys(data).forEach(function (key) {
				arr.push(data[key]);
			});
			setSubaccounts(arr);
			//setSubaccounts([]);
			//setLoading(false);
		});
	}, [banks]);

	const columns = [];

	return (
		<React.Fragment>
			<ChakraProvider theme={theme}>
				<div style={{ paddingLeft: "2em" }}>
					{subaccounts.length > 0 && (
						<TableComp
							key={subaccounts.id}
							head={heading}
							data={subaccounts}
							type={"subaccounts"}
						/>
					)}
					{subaccounts.length < 1 ? (
						<div style={{ marginLeft: "2em" }}>
							<h4 className="no-plan-text">
								<span className="planheading flw-huge-text">
									You currently do not have any subaccounts
								</span>
								<br />
								<span
									className="planheading"
									style={{ marginBottom: "24px" }}
								>
									{" "}
									created.
								</span>
							</h4>
						</div>
					) : (
						""
					)}
					{subaccounts.length < 1 && (
						<button
							style={{
								backgroundColor: "#F5A623",
								height: "56px",
								width: "276.3333435058594px",
								left: "203px",
								top: "326px",
								borderRadius: "4px",
								padding: "17px, 32px, 17px, 32px",
								border: "none",
								marginTop: "2em",
								marginLeft: "2em",
							}}
							onClick={onOpen}
						>
							<span
								style={{
									fontFamily: "Inter",
									fontSize: "18px",
									fontStyle: "normal",
									fontWeight: "500",
									lineHeight: "22px",
									letterSpacing: "0.002400000113993883px",
									textAlign: "center",
								}}
							>
								Create a subaccount +
							</span>
						</button>
					)}

					{subaccounts.length < 1 && (
						<Modal
							initialFocusRef={initialRef}
							finalFocusRef={finalRef}
							isOpen={isOpen}
							onClose={onClose}
						>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader>Create Subaccount</ModalHeader>
								<ModalCloseButton />
								<ModalBody pb={6}>
									{flwerror.message != undefined && (
										<div>
											<Alert status="error">
												<AlertIcon />
												<AlertDescription>
													{flwerror.message}
												</AlertDescription>
												<CloseButton
													position="absolute"
													right="8px"
													top="8px"
												/>
											</Alert>
										</div>
									)}

									<FormControl>
										<FormLabel>Name</FormLabel>
										<Input
											ref={initialRef}
											placeholder="Netflix Monthly.."
											onChange={(e) =>
												setSelectedName(e.target.value)
											}
										/>
									</FormControl>

									<FormControl>
										<FormLabel
											style={{ marginTop: "0.5em" }}
										>
											Email
										</FormLabel>
										<Input
											ref={initialRef}
											placeholder="example@example.com"
											onChange={(e) =>
												setSelectedEmail(e.target.value)
											}
										/>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Country</FormLabel>
										<Select
											onChange={(e) => onCountryChange(e)}
											placeholder="Select a Country"
										>
											<option value="NG">Nigeria</option>
											<option value="GH">Ghana</option>
											<option value="KE">Kenya</option>
											<option value="UG">Uganda</option>
											<option value="TZ">Tanzania</option>
										</Select>
									</FormControl>

									{banks.length > 0 && (
										<FormControl mt={4}>
											<FormLabel>Banks</FormLabel>
											<Select
												onChange={(e) =>
													setSelectedBank(
														e.target.value
													)
												}
												placeholder="Select a Bank"
											>
												{banks.map((bank) => {
													return (
														<option
															value={bank.code}
														>
															{bank.name}
														</option>
													);
												})}
											</Select>
										</FormControl>
									)}

									<FormControl mt={4}>
										<FormLabel>Account Number</FormLabel>
										<NumberInput>
											<NumberInputField
												onChange={(e) =>
													setSelectedAccountNumber(
														e.target.value
													)
												}
											/>
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Split value</FormLabel>
										<NumberInput
											defaultValue={0.5}
											precision={2}
											step={0.2}
											onChange={(e) =>
												setSelectedSplitValue(
													e.target.value
												)
											}
										>
											<NumberInputField />
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Phone Number</FormLabel>
										<InputGroup>
											<InputLeftAddon
												children={
													selectedPhoneCountryCode
												}
											/>
											<Input
												type="tel"
												placeholder="phone number"
												onChange={(e) =>
													setSelectedPhone(
														e.target.value
													)
												}
											/>
										</InputGroup>
									</FormControl>
								</ModalBody>

								<ModalFooter>
									<Button
										style={{ backgroundColor: "#f5a623" }}
										mr={3}
										onClick={createSubaccounthandler}
									>
										Create Subaccount
									</Button>
									<Button onClick={onClose}>Cancel</Button>
								</ModalFooter>
							</ModalContent>
						</Modal>
					)}
				</div>
			</ChakraProvider>
		</React.Fragment>
	);
};

export default Subaccount;
