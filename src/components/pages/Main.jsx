import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import BakcColor from "../layout/BakcColor";

import Loader from "../include/Loader.jsx";
import Rotate from "../include/Rotate.jsx";
import Section1 from "../include/Section1.jsx";
import Section2 from "../include/Section2.jsx";
import Section3 from "../include/Section3.jsx";
import Section4 from "../include/Section4.jsx";
import Section5 from "../include/Section5.jsx";
import Section6 from "../include/Section6.jsx";

const Main = () => {
    return (
        <>
            {/* <Loader /> */}
            <Header />
            <Rotate />
            <Contents>
                <Section1 />
                <Section2 />
                <Section3 />
                {/* <BakcColor> */}
                    <Section4 />
                    <Section5 />
                    <Section6 />
                {/* </BakcColor> */}
            </Contents>
        </>
    )
}

export default Main