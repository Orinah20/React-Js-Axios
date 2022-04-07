import useAPI from "./useAPI";
import {useParams} from "react-router-dom";

function Main(){

    let [ application_code] = useParams()

    const {status, response, error} = useAPI({
        method:'GET',
        url:`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,
        headers: {
            'AuthToken': 'LTFMOjphYzllZWEwMWE3MWE0NWQwMzczZTMxMTJkMWZhZjQyNzZmMmYyMDI1YzNiMmJkYzA4NjNiMmZhOTA1NDZjZGM1',
            'RequestReference': 'bnnnnkkkmkk'
        }
    }, application_code)

    return(
        <div className="bg-amber-200 relative text-center w-screen p-2 h-full">
            <div className="text-left">Side Bar</div>
        </div>
    )
}

export default Main
