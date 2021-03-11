import React, { useEffect, useState } from "react";
import "./SelectQuantity.css";

const SelectQuantity = (props) => {
    const MODAL_STATE_SELECT_FLAVOR = "selectFlavor";
    const MODAL_STATE_PREV_STEP = "selectBeansOrDrip";
    const [quantity, setQuantity] = useState(0);
    const BEANS = "coffeeBeans";
    const DRIP_BAG = "coffeeDripBag";
    
    const handleSelectQuantity = (e) => {
        if (e.target.id === "3box") {
            props.handleSetQuantity(3);
        } else if (e.target.id === "6box") {
            props.handleSetQuantity(6);
        } else {
            console.log(`Quantity : null`);
        }

        props.handleSetNextModalState(MODAL_STATE_SELECT_FLAVOR);
    }


    const handlePrevStep = () => {
        props.handleSetNextModalState(MODAL_STATE_PREV_STEP);

    }

    return (
        <section className="section__modal_quantity">
            <button className="trial_modal_quantity_back_button" onClick={handlePrevStep}>뒤로가기</button>
            <div className="trial_modal_quantity_button_wrapper">
                {props.coffeeType === BEANS ? (
                    <>
                        <button className="trial_modal_quantity_button" id="3box" onClick={handleSelectQuantity}>원두 3박스</button>
                        <button className="trial_modal_quantity_button" id="6box" onClick={handleSelectQuantity}>원두 6박스</button>
                    </>
                ) : (
                    <>
                        <button className="trial_modal_quantity_button" id="3box" onClick={handleSelectQuantity}>드립백 3박스</button>
                        <button className="trial_modal_quantity_button" id="6box" onClick={handleSelectQuantity}>드립백 6박스</button>
                    </>
                )}
            </div>
        </section>
    );
}

export default SelectQuantity;
