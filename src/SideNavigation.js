import React, {useState} from 'react';
import {NavLink, Outlet, useParams} from "react-router-dom";
import useAPI from "./useAPI";
import "./App.css"

function SideNav(){

    let { application_code } = useParams()

    let activeStyle = {
        background:"#9aa5b9",
    };

    const {status, error, response} = useAPI({
        method: 'GET',
        url: 'http://85.159.214.103:8105/api/rest/master/applications/?page=-1',
        headers: {
            'AuthToken': 'LTFMOjo5YTk3YzlkZGRmNWM0ZTQ4OTQyYTA1NmNjOTYyZDJhYmJhOTI1NzU1MDhlODA0OTQ4YTFmNjhkMTkwMzYzY2E4',
            'RequestReference': 'bnnnnkkkmkk'
        }
    })


    const result = response.map((data) => {
        return(
           <div className="p-1">
            <NavLink
                style={({ isActive }) =>
                    isActive ? activeStyle : {}
                }
                to={`/${data.application_code}`}
                key={data.application_code}
            >
                    {data.application_familiar_name}
            </NavLink>
           </div>
        )
    })

    return(
        <div>
            {application_code === undefined &&
                <div className="relative top-14 left-64 ">
                    <h1> No application Selected </h1>
                </div>
            }

            {status === "Loading" &&
                <div className="relative top-12 h-screen">
                    <h2>Loading</h2>
                </div>
            }

            {status === "Error" &&
                <div className="relative top-12 h-screen">
                    <h2>{error}</h2>
                </div>
            }

            {status === "Success" &&
                <div className="flex flex-row h-screen">
                    <div className="bg-gray-300 top-12 fixed w-60 p-2 h-full">
                        <div>{result}</div>
                    </div>
                    <Outlet/>
                </div>
            }
        </div>
    )
}

export default SideNav