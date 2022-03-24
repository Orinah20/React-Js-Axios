import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom'

function App() {
    let [statusGetApps, setStatusGetApps] = useState( "idle");
    let [responseGetApps, setResponseGetApps] = useState([]);
    let [errorGetApps, setErrorGetApps] = useState("false");

    let [statusGetModelInfo, setStatusGetModelInfo] = useState( "idle");
    let [responseGetModelInfo, setResponseGetModelInfo] = useState([]);
    let [errorGetModelInfo, setErrorGetModelInfo] = useState("false");

    let { application_code } = useParams()

    const getApps = async () => {
        try {
            setStatusGetApps("loading")
            await
                axios.get('http://85.159.214.103:8105/api/rest/master/applications/?page=-1',{
                    headers: {
                        'AuthToken': 'LTFMOjo0Yjg2NzYxOTRhMjY0MzA1Yjc4ZmIyYmUyZDE1YTZjMGU1NmNkMjc1YTdkYjVkMzZhYzNhNTE1MmIxMjM1MDBj',
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

    const getModelInfo = async () => {
        try{
            setStatusGetModelInfo("loading")
            await
                axios.get(`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,{
                    headers: {
                        'AuthToken': 'LTFMOjo0Yjg2NzYxOTRhMjY0MzA1Yjc4ZmIyYmUyZDE1YTZjMGU1NmNkMjc1YTdkYjVkMzZhYzNhNTE1MmIxMjM1MDBj',
                        'RequestReference': 'bnnnnkkkmkk'
                    }

                }).then((resp) => {

                    if(resp.status >= 200 || resp.status <= 299) {
                        setStatusGetModelInfo("success")
                        console.log(resp.data)
                        setResponseGetModelInfo(resp.data.datamap_dictionary)
                    }
                    else{
                        setStatusGetModelInfo("error")
                        setErrorGetModelInfo(resp.message)
                    }
                })
        }catch(err){
            setStatusGetModelInfo("error")
            console.log(err.message)
            setErrorGetModelInfo(err.message)
        }
    }

    useEffect(() => {
        if(application_code)
        {
            getModelInfo()
        }



        console.log("Application code:",application_code)
    },[application_code])



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

                    <div>
                        {application_code === undefined &&
                            <div>No application Selected</div>
                        }

                        {statusGetModelInfo === "loading" &&
                            <div className="App-content items-center">
                                <div className="spinner-border animate-spin flex-row w-8 border-4 rounded-full" role="status"/>
                            </div>
                        }
                        {statusGetModelInfo === "error" &&
                            <div className="App-content">
                            <h1 className={"accent-red-700 px-2"}>Error Fetching Files</h1>
                                <div className={"text-red-400 px-2"}>
                                    {errorGetModelInfo}
                                </div>
                            </div>
                        }

                        {statusGetModelInfo === "success" &&
                            <div className={"w-1/2 h-full text-lg"}>
                                {responseGetModelInfo}
                            </div>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}
export default App;
