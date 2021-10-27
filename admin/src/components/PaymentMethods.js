const PaymentMethods = ({ label, icon, iconWidth, iconMargin }) => {
	return (
		<>
			<div className="flutterwave-paymentmethod">
				{label === "Barter" && (
					<img
						className="flutterwave-pm-img"
						src={icon}
						alt={label}
						style={{ width: "25px", marginLeft: "10px" }}
					/>
				)}
				{label != "Barter" && (
					<img
						className="flutterwave-pm-img"
						src={icon}
						alt={label}
					/>
				)}
				<p className="flutterwave-pm-label">{label}</p>
			</div>
		</>
	);
};

export default PaymentMethods;
