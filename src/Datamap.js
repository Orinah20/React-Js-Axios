import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function Datamap(){

    let [statusGetModelInfo, setStatusGetModelInfo] = useState( "idle");
    let [responseGetModelInfo, setResponseGetModelInfo] = useState([]);
    let [errorGetModelInfo, setErrorGetModelInfo] = useState();

    let { application_code } = useParams()

    const getModelInfo = async () => {
        try{
            setStatusGetModelInfo("loading")
            await
                axios.get(`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,{
                    headers: {
                        'AuthToken': 'LTFMOjowMTYxZjlmY2E4N2MwMzcxMTkzZTFiYjdlNTJhYWFjMmY0ZjRhZGE5OTNmOTYyNDhlMzMyYjQ4NjNlODcyMzdi',
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

    return(
        <div className="App">
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
    )
}

export default Datamap
