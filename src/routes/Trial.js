import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import TrialMain from "../TrialComponent/TrialMain";
import TrialDetail from "../TrialComponent/TrialDetail";
import TrialDescription from "../TrialComponent/TrialDescription";
import TrialFlavor from "../TrialComponent/TrialFlavor";
import TrialPackaging from "../TrialComponent/TrialPackaging";


const Trial = () => {

    
    return (
        <div className="trial">
            <TrialMain/>
            <TrialDetail/>
            <TrialDescription/>
            <TrialFlavor/>
            <TrialPackaging/>
        </div>
    );

}

export default Trial;