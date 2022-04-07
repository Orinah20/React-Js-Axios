import Main from "./MainContent";
import {Link} from "react-router-dom";
import useAPI from "./useAPI";


function SideNav(){
    const {status, error, response} = useAPI({
        method: 'GET',
        url: 'http://85.159.214.103:8105/api/rest/master/applications/?page=-1',
        headers: {
            'AuthToken': 'LTFMOjphYzllZWEwMWE3MWE0NWQwMzczZTMxMTJkMWZhZjQyNzZmMmYyMDI1YzNiMmJkYzA4NjNiMmZhOTA1NDZjZGM1',
            'RequestReference': 'bnnnnkkkmkk'
        }
    })

    const result = response.map((data) => {
        return(
            <Link
                to={`/${data.application_code}`}
                key={data.application_code}
            >
                <div className="py-1">
                    {data.application_familiar_name}
                </div>
            </Link>
        )
    })

    return(
        <div>
            {status === "Loading" &&
                <div className="h-full">
                <div className="flex flex-row h-screen">
                    <h2>Loading</h2>
                </div>
                </div>
            }

            {status === "Error" &&
                <div className="h-full">
                <div className="flex flex-row h-screen">
                    <h2>{error}</h2>
                </div>
                </div>
            }

            {status === "Success" &&
                <div className="h-full">
                <div className="flex flex-row h-screen">
                    <div className="bg-amber-400 relative w-60 p-2 h-full">{result}</div>
                </div>
                </div>
            }
        </div>
    )
}

export default SideNav