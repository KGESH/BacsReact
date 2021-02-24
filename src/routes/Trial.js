import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import TrialMain from "../TrialComponent/TrialMain";
import TrialDetail from "../TrialComponent/TrialDetail";
import TrialDescription from "../TrialComponent/TrialDescription";


const Trial = () => {

    
    return (
        <div className="trial">
            <TrialMain/>
            <TrialDetail/>
            <TrialDescription/>
        </div>
    );

}

export default Trial;