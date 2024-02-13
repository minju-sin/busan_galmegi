// ./MainPage.js 
// src/components/Home.js

import React from "react";
import MainHeader from "../ui/MainHeader.js";
import News from "../ui/News.js";
import Sns from "../ui/Sns.js";
import Footer from "../ui/Footer.js";

function MainPage() {

    return (
        <>
            <MainHeader/>
            <News/>
            <Sns/>
            <Footer/>
        </>
    );
}

export default MainPage;