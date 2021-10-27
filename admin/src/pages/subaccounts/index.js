/**
 * External dependencies
 */
import React from "react";
import { useCallback, useState, useEffect } from "@wordpress/element";
import axios from "axios";
import {
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
	Button,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
/**
 * Internal dependencies
 */

import { BASE_URL, SUBACCOUNTS, NAMESPACE, STORE_NAME } from "../../constants";
import TableComp from "../table";
// import { useFetch } from "../../hooks";

const Subaccount = () => {
	const [loading, setLoading] = useState(true);
	const [subaccounts, setSubaccounts] = useState([]);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();
	const url = `${flutterwave_data.apiUrl}${NAMESPACE + SUBACCOUNTS}`;
	const createSubaccounthandler = ({ amount, name }) => {};

	const heading = ["Subaccount ID", "Business Name", "Bank Name", "Country"];

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
	}, []);

	return (
		<React.Fragment>
			{subaccounts.length > 0 && (
				<TableComp
					key={subaccounts.id}
					head={heading}
					data={subaccounts}
					type={"subaccounts"}
				/>
			)}
			{subaccounts.length < 1 ? (
				<div>
					<h4 className="no-plan-text">
						<span className="planheading">
							You currently do not have any subaccounts
						</span>
						<br />
						<span className="planheading"> created.</span>
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
						Create a payment plan
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
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input
									ref={initialRef}
									placeholder="Netflix Monthly.."
								/>
							</FormControl>

							<FormControl>
								<FormLabel>Email</FormLabel>
								<Input
									ref={initialRef}
									placeholder="example@example.com"
								/>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Account Number</FormLabel>
								<NumberInput>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Interval</FormLabel>
								<Select>
									<option value="NG">Nigeria</option>
									<option value="GH">Ghana</option>
									<option value="KE">Kenya</option>
									<option value="TZ">Tanzania</option>
								</Select>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Split value</FormLabel>
								<NumberInput
									defaultValue={0.5}
									precision={2}
									step={0.2}
								>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Interval</FormLabel>
								<Select placeholder="Select an Interval">
									<option value="weekly">Weekly</option>
									<option value="monthly">Monthly</option>
									<option value="anually">Anually</option>
									<option value="quarterly">Quaterly</option>
								</Select>
							</FormControl>

							<FormControl mt={4}>
								<FormLabel>Duration</FormLabel>
								<NumberInput
									defaultValue={15}
									precision={2}
									step={0.2}
								>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button
								style={{ backgroundColor: "#f5a623" }}
								mr={3}
							>
								Create Subaccount
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</React.Fragment>
	);
};

export default Subaccount;
