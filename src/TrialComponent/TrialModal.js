import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./TrialModal.css";
import SelectBeansOrDrip from "./TrialModalComponent/SelectBeansOrDrip";
import SelectQuantity from "./TrialModalComponent/SelectQuantity";
import SelectFlavor from "./TrialModalComponent/SelectFlavor";

const modalStyle = {
    content: {
        top: "70%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "30%"
    }
}

const TrialModal = (props) => {

    const MODAL_STATE_SELECT_BEANS_OR_DRIP = "selectBeansOrDrip";
    const MODAL_STATE_SELECT_COUNT = "selectCount";
    const MODAL_STATE_SELECT_FLAVOR ="selectFlavor";

    const [coffeeType, setCoffeeType] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [flavorTypeCount, setFlavorTypeCount] = useState("");
    const [grindingDegree, setGrindingDegree] = useState("");
    const [modalState, setModalState] = useState(MODAL_STATE_SELECT_BEANS_OR_DRIP);



    const handleSetCoffeeType = (coffeeTypes) => {
        setCoffeeType(coffeeTypes);
    }

    const handleSetQuantity = (quantity) => {
        setQuantity(quantity);
    }
    
    const handleSetFlavorType = (flavorTypeObj) => {
        setFlavorTypeCount(flavorTypeObj);
        console.log(`modal total quantity : ${quantity}`);
    }

    const handleSetNextModalState = (modalState) => {
        setModalState(modalState);
    }

    const renderSwitch = (modalState) => {
        switch (modalState) {
            case MODAL_STATE_SELECT_BEANS_OR_DRIP:
                return <SelectBeansOrDrip handleSetCoffeeType={handleSetCoffeeType} handleSetNextModalState={handleSetNextModalState}/>

            case MODAL_STATE_SELECT_COUNT:
                return <SelectQuantity coffeeType={coffeeType} handleSetQuantity={handleSetQuantity} handleSetNextModalState={handleSetNextModalState}/>
                
            case MODAL_STATE_SELECT_FLAVOR:
                return <SelectFlavor quantity={quantity} handleSetFlavorType={handleSetFlavorType} handleSetNextModalState={handleSetNextModalState}/>

            default:
                break;
        }
    }

    useEffect(() => {
        Modal.setAppElement("body");
    });

    useEffect(() => {
        console.log(`call handle coffee type! ${coffeeType}`);
        
    }, [coffeeType]);

    useEffect(() => {
        console.log(`call handle quantity! ${quantity}`);
    }, [quantity]);

    useEffect(() => {
        console.log(`call handle flavorType!`);
        console.log(flavorTypeCount);
    }, [flavorTypeCount]);

    useEffect(() => {
        console.log("current state : ");
        console.log(coffeeType);
        console.log(quantity);
        console.log(flavorTypeCount);
    }, [modalState]);

    return (
        <Modal
            style={modalStyle}
            isOpen={props.isOpen}
            onRequestClose={props.onModalClose}
        >

        {renderSwitch(modalState)}

        </Modal>
    );
}


export default TrialModal;
