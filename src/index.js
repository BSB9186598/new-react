import React from "react";
import ReactDOM from "react-dom/client";
import Sample from "./classComponents/Sample";
import SampleF from "./FunctionalComponent/SampleF";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
    <SampleF />
    <hr/>
    <Sample/> 
    <hr/>
    </>
)