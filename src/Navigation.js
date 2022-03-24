import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Datamap from "./Datamap";

function Navigation(){

    let [statusGetApps, setStatusGetApps] = useState( "idle");
    let [responseGetApps, setResponseGetApps] = useState([]);
    let [errorGetApps, setErrorGetApps] = useState();

    const getApps = async () => {
        try {
            setStatusGetApps("loading")
            await
                axios.get('http://85.159.214.103:8105/api/rest/master/applications/?page=-1',{
                    headers: {
                        'AuthToken': 'LTFMOjowMTYxZjlmY2E4N2MwMzcxMTkzZTFiYjdlNTJhYWFjMmY0ZjRhZGE5OTNmOTYyNDhlMzMyYjQ4NjNlODcyMzdi',
                        'RequestReference': 'bnnnnkkkmkk'
                    }
                }).then((res) => {
                    if (res.status >= 200) {
                        setStatusGetApps("success")
                        console.log(res)
                        setResponseGetApps(res.data)
                    } else if (res.status <= 299) {
                        setStatusGetApps("success")
                        console.log(res)
                        setResponseGetApps(res.data)
                    } else {
                        setStatusGetApps("error")
                        setErrorGetApps(res.message)
                    }
                })
        }catch (err) {
            setStatusGetApps("error")
            console.log(err.message)
            setErrorGetApps(err.message)
        }};

    useEffect(() => {
        getApps();
    }, [])

    const arrGetApps = responseGetApps.map((data) => {
        return(
            <Link
                to={`/${data.application_code}`}
                key={data.application_code}
            >
                <div>
                    {data.application_familiar_name}
                </div>
            </Link>
        )
    })

    return(
        <div className="App">
            {statusGetApps === "loading" &&
                <div className="App-content justify-center">
                    <h1 className={"accent-blue-500 "}>Fetching Data with React Hooks</h1>
                    <div className={"px-10"}>
                        <div className="spinner-border items-center animate-spin inline-block w-8 border-4 rounded-full" role="status"/>
                    </div>
                </div>
            }

            {statusGetApps === "error" && <div className="App-content">
                <h1 className={"px-2"}>Error Fetching Files</h1>
                <div className={"text-red-400 px-2"}>
                    {errorGetApps}
                </div>
            </div>
            }

            {statusGetApps === "success" && (
                <div className="App-content">
                    <div className="flex-row text-lg">
                        {arrGetApps}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navigation
