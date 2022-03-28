import {useParams} from "react-router-dom";
import useAPI from "./useAPI";

function Datamap(){
    let { application_code } = useParams()

    const {status, response, error} = useAPI({
        method: 'get',
        url:`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,
        headers: {
            'AuthToken': 'LTFMOjpjMDg0YTkwMDE5NmI3MjQ3MjljZDE5YzI2ZjJmYzVjZmE1OWU2ZTJjMDJlZTFmNDZiZDE1MzlhZjcyNWNjNjU5',
            'RequestReference': 'bnnnnkkkmkk'
        }}, application_code)

    return(
        <div className="App">
            {application_code === undefined &&
                <div>No application Selected</div>
            }

            {status === "loading" &&
                <div className="App">
                    <div className="spinner-border animate-spin flex-row w-8 border-4 rounded-full" role="status"/>
                </div>
            }
            {status === "error" &&
                <div className="App-content">
                    <h1 className={"accent-red-700 px-2"}>Error Fetching Files</h1>
                    <div className={"text-red-400 px-2"}>
                        {error}
                    </div>
                </div>
            }

            {status === "success" &&
                <div className={"w-1/2 h-full text-lg"}>
                    {response.datamap_dictionary}
                </div>
            }
        </div>
    )
}

export default Datamap
