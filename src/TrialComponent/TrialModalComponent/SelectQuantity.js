import React, { useEffect, useState } from "react";
import "./SelectQuantity.css";

const SelectQuantity = ({coffeeType, handleQuantity}) => {
    const [quantitiy, setQuantity] = useState(0);
    const BEANS = "coffeeBeans";
    const DRIP_BAG = "coffeeDripBag";

    useEffect(() => {
        console.log(`quantity useEffect : ${quantitiy}`);
        handleQuantity(quantitiy);
    });

    return (
        coffeeType === BEANS ? (

            <section className="section__trial_modal">
                <button className="trial_modal_test_beans_3_btn" onClick={() => setQuantity(3)}>원두 3박스</button>
                <button className="trial_modal_test_beans_6_btn" onClick={() => setQuantity(6)}>원두 6박스</button>
            </section>
        ) : (
            
            <section className="section__trial_modal">
                <button className="trial_modal_test_drip_3_btn" onClick={() => setQuantity(3)}>드립백 3박스</button>
                <button className="trial_modal_test_drip_6_btn" onClick={() => setQuantity(6)}>드립백 6박스</button>
            </section>
        )
    );

}

export default SelectQuantity;
