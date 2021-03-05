import React, { useState } from "react";
import "./SelectFlavor.css";

const SelectFlavor = (props) => {

    const [savoryCount, setSavoryCount] = useState(0);
    const [souryCount, setSouryCount] = useState(0);
    const [sweetyCount, setSweetyCount] = useState(0);
    const [decaffeinated, setDecaffeinatedCount] = useState(0);
    const [box1Item, setBox1Item] = useState("default");
    const [box2Item, setBox2Item] = useState("default");
    const [box3Item, setBox3Item] = useState("default");
    const [flavorTypeArray, setFlavorTypeArray] = useState([]);

    const flavorTypeObj = {
        savoryCount: savoryCount,
        souryCount: souryCount,
        sweetyCount: sweetyCount,
        decaffeinated: decaffeinated
    };

    const handleSelectSavory = () => {
        let flavorArray = [...flavorTypeArray];
        flavorArray.push("savory");
        setFlavorTypeArray(flavorArray);
        setSavoryCount(savoryCount + 1);
        console.log(savoryCount);
    }

    const handleSelectSoury = () => {
        setSouryCount(souryCount + 1);
        console.log(souryCount);
    }

    const handleSelectSweety = () => {
        setSweetyCount(sweetyCount + 1);
        console.log(sweetyCount);
    }

    const handleSelectDecaffeinated = () => {
        setDecaffeinatedCount(decaffeinated + 1);
        console.log(decaffeinated);
    }

    const sendFlavor = () => {
        console.log(flavorTypeObj);
        props.handleSetFlavorType(flavorTypeObj);
    }

    const handleDeselectBoxItem1 = () => {
        let deselectedItemArray = [...flavorTypeArray];
        deselectedItemArray[0] = "default11";
        setFlavorTypeArray(deselectedItemArray);
    }

    return (
        <section className="section__trial_modal">

            <div>
                <h4 className="box1" onClick={handleDeselectBoxItem1}>{box1Item}</h4>
                <h4 className="box2" onClick={() => {setBox2Item("default2")}}>{box2Item}</h4>
                <h4 className="box3" onClick={() => {setBox3Item("default3")}}>{box3Item}</h4>
            </div>
                <div>
                    <button onClick={handleSelectSavory}>savory</button>
                    <button onClick={handleSelectSoury}>soury</button>
                    <button onClick={handleSelectSweety}>sweety</button>
                    <button onClick={handleSelectDecaffeinated}>decaffeinated</button>
                    <button onClick={sendFlavor}>send</button>
                
                </div>
        </section>
    );
    
}

export default SelectFlavor;