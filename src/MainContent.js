import useAPI from "./useAPI";
import {useParams} from "react-router-dom";

function Main(){

    let {application_code} = useParams()

    const {status, response, error} = useAPI({
        method:'GET',
        url:`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,
        headers: {
            'AuthToken': 'LTFMOjpjMmRiMTU2ZTI2Y2YyZmZhODcwZjhmMTMxNjYwNDM4ZWEwYWU4NWFjMmEwMGMwMTc5MjM2ZTZhYzM0NmQ4MGFk',
            'RequestReference': 'bnnnnkkkmkk'
        }
    }, application_code)

    return(
        <div>

            {application_code === undefined &&
                <div className="relative top-15 left-60 ">
                   <h1> No application Selected </h1>
                </div>
            }

            {status === "Loading" &&
                    <div className=" relative top-12 left-60 p-5 ">
                        <h2 className="w-9/12 justify-center content-center">Loading</h2>
                    </div>
            }

            {status === "Error" &&
                <div className=" relative top-12 left-60 p-5 h-screen">
                    <h2>{error}</h2>
                </div>
            }

            {status === "Success" &&
                <div className=" relative inline-block top-12 w-9/12 left-60 p-5 -z-20 h-screen">
                    {response.datamap_dictionary}
                </div>
            }
        </div>
    )
}

export default Main
