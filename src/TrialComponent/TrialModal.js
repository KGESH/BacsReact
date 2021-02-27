import React from "react";
import Modal from "react-modal";

const TrialModal = ({isOpen, onModalClose}) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onModalClose}
        >
            <h2>modal open~</h2>
            <button onClick={onModalClose}>Close Button@</button>

        </Modal>
    );
}


export default TrialModal;