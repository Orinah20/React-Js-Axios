import './App.css';
import Navigation from "./Navigation";

import {Outlet} from "react-router-dom";
import React from "react";

function App() {
    return (
        <div>
            <div><h1 className="text-3xl fixed w-100 bg-slate-700 text-white">DMD Editor</h1></div>
            <div className='flex'>
                <div className={'flex-none w-64'}>
                    <Navigation/>
                </div>

                <div className={'flex-1 font-mono text-xs relative top-10'}>
                    <Outlet/>
                </div>
            </div>
        </div>

    )
}

export default App;
