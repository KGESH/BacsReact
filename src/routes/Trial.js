import React from "react";
import TrialMain from "../TrialComponent/TrialMain";
import TrialDetail from "../TrialComponent/TrialDetail";
import TrialDescription from "../TrialComponent/TrialDescription";
import TrialFlavor from "../TrialComponent/TrialFlavor";
import TrialPackaging from "../TrialComponent/TrialPackaging";


const Trial = () => {

    return (
        <>
            <TrialMain/>
            <TrialDetail/>
            <TrialDescription/>
            <TrialFlavor/>
            <TrialPackaging/>
        </>
    );

}

export default Trial;