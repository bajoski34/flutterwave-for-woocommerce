/**
 * External dependencies
 */
import React, { useState, useEffect } from "react";
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
	extendTheme,
	ChakraProvider,
} from "@chakra-ui/react";
import { getQueryArgs } from "@wordpress/url";
/**
 * Internal dependencies
 */

import { BASE_URL, PLAN, NAMESPACE, STORE_NAME } from "../../constants";
import TableComp from "../table";
// import { useFetch } from "../../hooks";

const colors = {
	brand: {
		900: "#f5a623",
		800: "#f5a623",
		700: "#f5a623",
	},
};
const theme = extendTheme({ colors });

const heading = document.querySelector(
	".woocommerce-layout__header .woocommerce-layout__header-heading"
);

// (function (heading) {
// 	const currentAddress = getQueryArgs(window.location);

// 	console.log(currentAddress);
// 	if (
// 		currentAddress.page === "wc-admin" &&
// 		currentAddress.path === "/payments/settings"
// 	) {
// 		// document.querySelector(
// 		// 	".woocommerce-layout__header .woocommerce-layout__header-heading"
// 		// ).style.borderBottom = "2px solid rgb(245, 166, 35)";
// 		console.log(heading);
// 	}
// 	console.log("running");
// })(window.location);

// .woocommerce-layout__header .woocommerce-layout__header-heading {
// 	border-bottom: 2px solid rgb(245, 166, 35);
// }

const Plan = () => {
	const [loading, setLoading] = useState(true);
	const [plans, setPlans] = useState([]);
	const url = `${flutterwave_data.apiUrl}${NAMESPACE + PLAN}`;
	const [newPlan, setNewPlan] = useState({
		name: "Woo-plan1",
		amount: 100,
		interval: "monthly",
		duration: 5,
	});
	const [country, setCountry] = useState("NGN");
	const createPlanhandler = ({ amount, name, interval, duration }) => {};

	useEffect(() => {
		axios.get(url).then((res) => {
			const { ...data } = res.data.data;
			let arr = [];
			Object.keys(data).forEach(function (key) {
				arr.push(data[key]);
			});
			setPlans(arr);
			//setLoading(false);
		});
	}, []);

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef();
	const finalRef = React.useRef();

	const heading = [
		"Name",
		"Amount",
		"Duration",
		"Interval",
		"Currency",
		"status",
	];

	const handleSavePlan = () => {
		axios.post(url, newPlan).then((res) => {
			const { ...data } = res.data.data;
			console.log(data);
			window.location.reload();
		});
	};

	return (
		<React.Fragment>
			<ChakraProvider theme={theme}>
				<div style={{ paddingLeft: "2em" }}>
					{plans.length > 0 && (
						<TableComp
							key={plans.id}
							head={heading}
							data={plans}
							type={"plans"}
						/>
					)}
					{plans.length < 1 ? (
						<div style={{ marginLeft: "2em" }}>
							<h4 className="no-plan-text">
								<span className="planheading flw-huge-text">
									You currently do not have any payment
								</span>
								<br />
								<span
									className="planheading"
									style={{ marginBottom: "24px" }}
								>
									plans created.
								</span>
							</h4>
						</div>
					) : (
						""
					)}
					{plans.length < 1 && (
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
								Create a payment plan +
							</span>
						</button>
					)}

					{plans.length < 1 && (
						<Modal
							initialFocusRef={initialRef}
							finalFocusRef={finalRef}
							isOpen={isOpen}
							onClose={onClose}
						>
							<ModalOverlay />
							<ModalContent>
								<ModalHeader style={{ fontWeight: "300" }}>
									Create Plan
								</ModalHeader>
								<ModalCloseButton />
								<ModalBody pb={6}>
									<FormControl>
										<FormLabel>Plan name</FormLabel>
										<Input
											ref={initialRef}
											placeholder="Netflix Monthly.."
											value={newPlan.name}
											onChange={(e) =>
												setNewPlan({
													...newPlan,
													name: e.target.value,
												})
											}
										/>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Amount</FormLabel>
										<NumberInput
											defaultValue={newPlan.amount}
											precision={2}
											step={0.2}
										>
											<NumberInputField
												onChange={(e) =>
													setNewPlan({
														...newPlan,
														amount: parseInt(
															e.target.value
														),
													})
												}
											/>
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Country</FormLabel>
										<Select
											placeholder="Select a Currency"
											defaultValue={country}
											onChange={(e) =>
												setCountry(e.target.value)
											}
										>
											<option value="NGN">NGN</option>
											<option value="KES">KES</option>
											<option value="UGX">UGX</option>
											<option value="USD">USD</option>
										</Select>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Interval</FormLabel>
										<Select
											placeholder="Select an Interval"
											defaultValue={newPlan.interval}
											onChange={(e) =>
												setNewPlan({
													...newPlan,
													interval: e.target.value,
												})
											}
										>
											<option value="weekly">
												Weekly
											</option>
											<option value="monthly">
												Monthly
											</option>
											<option value="anually">
												Anually
											</option>
											<option value="quarterly">
												Quaterly
											</option>
										</Select>
									</FormControl>

									<FormControl mt={4}>
										<FormLabel>Duration</FormLabel>
										<NumberInput value={newPlan.duration}>
											<NumberInputField
												onChange={(e) =>
													setNewPlan({
														...newPlan,
														duration:
															e.target.value,
													})
												}
											/>
										</NumberInput>
									</FormControl>
								</ModalBody>

								<ModalFooter>
									<Button
										style={{ backgroundColor: "#f5a623" }}
										mr={3}
										onClick={handleSavePlan}
									>
										Create Plan
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

// const TableHeader = () => {
//   const heading = [
//     "Name",
//     "Amount",
//     "Duration",
//     "Interval",
//     "Currency",
//     // "status",
//   ];
//   return (
//     <React.Fragment>
//       <div
//         className="flw-tb-heading"
//         style={{
//           backgroundColor: "#F4F6F8",
//           display: "flex",
//           verticalAlign: "center",
//           flexDirection: "row",
//         }}
//       >
//         {heading.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#F4F6F8",
//               border: "none",
//               verticalAlign: "center",
//             }}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </React.Fragment>
//   );
// };

// const TableData = ({ name, amount, duration, interval, currency, status }) => {
//   const data = [name, amount, duration, interval, currency];
//   return (
//     <React.Fragment>
//       <div
//         className="flw-tb-data"
//         style={{
//           backgroundColor: "#FFFFFF",
//           display: "flex",
//           verticalAlign: "center",
//           flexDirection: "row",
//           borderTop: "none",
//           borderLeft: "none",
//           borderRight: "none",
//           borderBottom: "1px solid #F2F2F2",
//         }}
//       >
//         {data.map((item, index) => (
//           <div
//             key={index}
//             style={{
//               backgroundColor: "#F4F6F8",
//               border: "none",
//               verticalAlign: "center",
//               textAlign: "center",
//               wordBreak: "break-word",
//               overflow: "hidden",
//             }}
//           >
//             {index === 0 ? item.substring(0, 10) : item}
//           </div>
//         ))}
//       </div>
//     </React.Fragment>
//   );
// };
export default Plan;
