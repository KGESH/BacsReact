import React, { useEffect, useState } from "react";
import "./SelectBeansOrDrip.css"
import beansImg from "../../Bacs_Images/home_detail.jpg";
import dirpBagImg from "../../Bacs_Images/home.png";

const SelectBeansOrDrip = (props) => {
    const BEANS = "coffeeBeans";
    const DRIP_BAG = "coffeeDripBag";
    const MODAL_STATE_SELECT_COUNT = "selectCount";
    const [coffeeType, setCoffeeType] = useState("");

    useEffect(() => {
        // 초기값 null 넘어옴
        if (coffeeType !== "") {
            console.log(`select : ${coffeeType}`);
            props.handleSetCoffeeType(coffeeType);
            props.handleSetNextModalState(MODAL_STATE_SELECT_COUNT);
        }
    }, [coffeeType]);

    
    return (
        <section className="section__modal_select_beans_or_drip">
            <div className="trial__modal_beans_wrapper">
                <div className="trial__modal_beans_title">원두 플랜</div>
                <img className="trial__modal_beans_img" src={beansImg} onClick={() => setCoffeeType(BEANS)} />
            </div>
            <div className="trial__modal_drip_wrapper">
                <div className="trial__modal_drip_title">드립백 플랜</div>
                <img className="trial__modal_drip_img" src={dirpBagImg} onClick={() => setCoffeeType(DRIP_BAG)}/>
            </div>
        </section>
    );
}

export default SelectBeansOrDrip;