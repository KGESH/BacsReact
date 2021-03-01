import { render } from '@testing-library/react';
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./TrialModal.css";
import SelectBeansOrDrip from "./TrialModalComponent/SelectBeansOrDrip";
import SelectQuantity from "./TrialModalComponent/SelectQuantity";

const modalStyle = {
    content: {
        top: "70%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    }
}

const TrialModal = ({isOpen, onModalClose}) => {

    const SELECT_BEANS_OR_DRIP = "selectBeansOrDrip";
    const SELECT_COUNT = "selectCount";

    const [coffeeType, setCoffeeType] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [flavorType, setFlavorType] = useState("");
    const [grindingDegree, setGrindingDegree] = useState("");
    const [modalState, setModalState] = useState(SELECT_BEANS_OR_DRIP);



    const handleCoffeeType = (coffeeTypes) => {
        setCoffeeType(coffeeTypes);
    }

    const handleQuantity = (quantity) => {
        setQuantity(quantity);
    }

    const handleModalState = (modalState) => {
        setModalState(modalState);
    }

    const renderSwitch = (modalState) => {
        switch (modalState) {
            case SELECT_BEANS_OR_DRIP:
                return <SelectBeansOrDrip handleCoffeeType={handleCoffeeType} handleModalState={handleModalState}/>

            case SELECT_COUNT:
                return <SelectQuantity coffeeType={coffeeType} handleQuantity={handleQuantity}/>

        
            default:
                break;
        }
    }

    useEffect(() => {
        Modal.setAppElement("body");
    });

    useEffect(() => {
        console.log(`call handle! ${coffeeType}`);
    }, [coffeeType, quantity]);

    return (
        <Modal
            style={modalStyle}
            isOpen={isOpen}
            onRequestClose={onModalClose}
        >

        {renderSwitch(modalState)}


        </Modal>
    );
}


export default TrialModal;
