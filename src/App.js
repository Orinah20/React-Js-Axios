import './App.css';
import Navigation from "./Navigation";
import Datamap from "./Datamap";
import {Route, Routes, Outlet} from "react-router-dom";
import React from "react";

function App() {
    return (
        <div className='flex'>
            <div className={'flex-none w-64'}>
                <Navigation/>
            </div>

            <div className={'flex-1 font-mono text-xs'}>
                <Outlet/>
            </div>


        </div>
    )
}

export default App;
