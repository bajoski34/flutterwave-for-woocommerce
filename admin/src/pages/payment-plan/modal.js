import React from "react";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

// Modal.setAppElement("#yourAppElement");

const PlanModal = ({ onClick, modalIsOpen, setIsOpen }) => {
	let subtitle;
	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}
	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>
					Create a New plan
				</h2>
				<button onClick={closeModal}>close</button>
				<form>
					<button>the modal</button>
				</form>
			</Modal>
		</div>
	);
};

export default PlanModal;
