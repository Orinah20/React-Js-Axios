import useAPI from "./useAPI";
import {useParams} from "react-router-dom";

function Main(){

    let {application_code} = useParams()

    const {status, response, error} = useAPI({
        method:'GET',
        url:`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,
        headers: {
            'AuthToken': 'LTFMOjo5YzM5YTIwZjZlNjM0NjRmM2I2MTFmYWQzODAzNTZmOWIyOGFhNGI3OWFjMWM0NGFlYzdmMDBlZGY0MjAxZTkw',
            'RequestReference': 'bnnnnkkkmkk'
        }
    }, application_code)

    return(
        <div>
            {application_code === undefined &&
                <div className="h-full">
                    <div className="relative top-12 left-60 h-screen">
                        No application Selected
                    </div>
                </div>
            }

            {status === "Loading" &&
                    <div className="flex flex-row relative top-12 left-60 p-5 h-screen">
                        <h2 className="flex flex-col w-9/12 justify-center content-center">Loading</h2>
                    </div>
            }

            {status === "Error" &&
                <div className="flex flex-row relative top-12 left-60 p-5 h-screen">
                    <h2>{error}</h2>
                </div>
            }

            {status === "Success" &&
                <div className="flex flex-row relative top-12 w-9/12 left-60 p-5 -z-20 h-screen">
                    {response.datamap_dictionary}
                </div>
            }
        </div>
    )
}

export default Main
