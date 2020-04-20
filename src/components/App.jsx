import React, { useState } from "react";
import Header from "./main/Header";
import About from "./about/About";
import Footer from "./main/Footer";
import Home from "./home/Home"
import Skills from "./skills/Skills";
import AdditionalInfo from "./additional/AdditionalInfo";
import Achievements from "./achievements/Achievements";
import Posts from "./posts/Posts";

function App() {

    return (
        <div>
            <Header />
            <Home />
            <AdditionalInfo />
            <About />
            <Skills />
            <Achievements />
            <Posts />
            <Footer />
        </div>
    );
}

export default App;