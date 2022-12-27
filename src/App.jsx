import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/pages/Main";
// import commonGsap from "./components/utils/commonGsap";
// import effect from "./components/utils/effect";
// import s1Gsap from "./components/utils/s1Gsap";
// import s2Gsap from "./components/utils/s2Gsap";
// import s3Gsap from "./components/utils/s3Gsap";
// import s4Gsap from "./components/utils/s4Gsap";
// import s5Gsap from "./components/utils/s5Gsap";
// import s6Gsap from "./components/utils/s6Gsap";

function App() {
    // useEffect(() => {
    //     commonGsap();
    //     effect();
    //     s1Gsap();
    //     s2Gsap();
    //     s3Gsap();
    //     s4Gsap();
    //     s5Gsap();
    //     s6Gsap();
    // }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
