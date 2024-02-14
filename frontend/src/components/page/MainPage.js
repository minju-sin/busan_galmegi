// ../Page/MainPage.js

import React from "react";
import MainHeader from "../ui/MainHeader.js";
import News from "../ui/News.js";
import Sns from "../ui/Sns.js";
import Footer from "../ui/Footer.js";
import MainImage from "../ui/MainImage.js";

function MainPage() {

    return (
        <>
            <MainHeader/>
            <MainImage/>
            <News/>
            <Sns/>
            <Footer/>
        </>
    );
}

export default MainPage;