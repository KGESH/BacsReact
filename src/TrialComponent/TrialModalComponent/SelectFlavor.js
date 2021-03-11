import React, { useState } from "react";
import "./SelectFlavor.css";

const SelectFlavor = (props) => {
    const MODAL_STATE_SELECT_COUNT = "selectCount";
    const [savoryCount, setSavoryCount] = useState(0);
    const [souryCount, setSouryCount] = useState(0);
    const [sweetyCount, setSweetyCount] = useState(0);
    const [decaffeinated, setDecaffeinatedCount] = useState(0);
    const [flavorTypeArray, setFlavorTypeArray] = useState([]);
    const [flavorTotal, setFlavorTotal] = useState(0);

    const flavorTypeObj = {
        savoryCount,
        souryCount,
        sweetyCount,
        decaffeinated
    };

    const handleSelectItem = (event) => {
        if (flavorTotal >= props.quantity) {
            return;
        }

        const flavorType = event.target.className;
        let flavorArray = [...flavorTypeArray];
        flavorArray.push(flavorType);
        console.log(flavorArray);        
        setFlavorTypeArray(flavorArray);
        setFlavorTotal(flavorTotal + 1);
        
        switch (flavorType) {
            case "savory":
                setSavoryCount(savoryCount + 1);
                break;

            case "soury":
                setSouryCount(souryCount + 1);
                break;

            case "sweety":
                setSweetyCount(sweetyCount +1);
                break;

            case "decaffeinated":
                setDecaffeinatedCount(decaffeinated + 1);
                break;
                
            default:
                console.log(`Select Item default case`);
        }
    }


    const sendFlavor = () => {
        console.log(flavorTypeObj);
        props.handleSetFlavorType(flavorTypeObj);
    }

    const handleDeselectItem = (event) => {
        const index = parseInt(event.target.id, 10);
        const flavorType = flavorTypeArray[index];
        switch (flavorType) {
            case "savory":
                setSavoryCount(savoryCount -1);
                break;

            case "soury":
                setSouryCount(souryCount -1);
                break;

            case "sweety":
                setSweetyCount(sweetyCount -1);
                break;

            case "decaffeinated":
                setDecaffeinatedCount(decaffeinated -1);
                break;

            default:
                console.log(`Deselect Item default case`);
        }

        console.log(index);
        let deselectedItemArray = [...flavorTypeArray];
        deselectedItemArray.splice(index, 1);
        setFlavorTotal(flavorTotal - 1);
        setFlavorTypeArray(deselectedItemArray);
    }

    const handlePrevStep = () => {
        props.handleSetNextModalState(MODAL_STATE_SELECT_COUNT);
    }

    return (
        <section className="section__modal_select_flavor">
            <button className="trial_modal_select_flavor_back_button" onClick={handlePrevStep}>뒤로가기</button>


            <div className="trial__modal_selected_item_wrapper">
            {flavorTypeArray.map((data, index) => {
                return <h4 className="box_item" id={index} key={index} onClick={handleDeselectItem}>{flavorTypeArray[index]}</h4>;
            })}
            </div>

            
            <div className="trial__modal_button_wrapper">
                <button className="savory" onClick={handleSelectItem}>savory</button>
                <button className="soury" onClick={handleSelectItem}>soury</button>
                <button className="sweety" onClick={handleSelectItem}>sweety</button>
                <button className="decaffeinated" onClick={handleSelectItem}>decaffeinated</button>
                <button className="send" onClick={sendFlavor}>send</button>
            </div>
        </section>
    );
    
}

export default SelectFlavor;