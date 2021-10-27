const InfoBox = ({ title, text }) => {
	return (
		<>
			<div className="flutterwave-infobox">
				<h5 className="flutterwave-infotitle">{title}</h5>
				<p className="flutterwave-infotext">{text}</p>
			</div>
		</>
	);
};

export default InfoBox;
