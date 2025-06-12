import React from "react";
import TopBar from "./TopBar"
import RouteSelect from "./RouteSelect";

export default function Navbar() {
    return (
        <div className="m-4 p-4 sticky top-4 max-w-[25vh] bg-navbar-bg rounded h-[96vh] items-center">
            <div>
                <TopBar />
                <RouteSelect /> 
                <img src="../../images/CareLine.png" alt="logo" className="fixed bottom-10 w-[200px] border-t-2 border-stone-200" />
            </div>
            
        </div>
    );
}