import React, { useEffect, useState } from "react";
import "./SelectQuantity.css";

const SelectQuantity = (props) => {
    const MODAL_STATE_SELECT_FLAVOR = "selectFlavor";
    const [quantity, setQuantity] = useState(0);
    const BEANS = "coffeeBeans";
    const DRIP_BAG = "coffeeDripBag";
    
    const handleSelectQuantity = (e) => {
        if (e.className === "3box") {
            props.handleSetQuantity(3);
        } else {
            props.handleSetQuantity(6);
        }

        props.handleSetNextModalState(MODAL_STATE_SELECT_FLAVOR);
    }

    return (
        props.coffeeType === BEANS ? (

            <section className="section__trial_modal">
                <button className="trial_modal_test_beans_3_btn 3box" onClick={handleSelectQuantity}>원두 3박스</button>
                <button className="trial_modal_test_beans_6_btn 6box" onClick={handleSelectQuantity}>원두 6박스</button>
            </section>
        ) : (
            
            <section className="section__trial_modal">
                <button className="trial_modal_test_drip_3_btn 3box" onClick={handleSelectQuantity}>드립백 3박스</button>
                <button className="trial_modal_test_drip_6_btn 6box" onClick={handleSelectQuantity}>드립백 6박스</button>
            </section>
        )
    );
}

export default SelectQuantity;
