
import {Link} from "react-router-dom";
import useAPI from "./useAPI";

function Navigation(){
    const {status, response, error} = useAPI({
        url:'http://85.159.214.103:8105/api/rest/master/applications/?page=-1',
        method: 'GET',
        headers: {
            'AuthToken': 'LTFMOjpjMDg0YTkwMDE5NmI3MjQ3MjljZDE5YzI2ZjJmYzVjZmE1OWU2ZTJjMDJlZTFmNDZiZDE1MzlhZjcyNWNjNjU5',
            'RequestReference': 'bnnnnkkkmkk'
        }
    })

    const arr = response.map((data) => {
        return (
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

    return (
        <div>
            {status === "loading" &&
                <div className="loading_Backdrop justify-center">
                    <div className={"px-10"}>
                        <div
                            className="spinner-border items-center animate-spin inline-block w-8 border-4 rounded-full"
                            role="status"/>
                    </div>
                </div>
            }

            {status === "error" && <div className="App-content">
                <h1 className={"px-2"}>Error Fetching Files</h1>
                <div className={"text-red-400 px-2"}>
                    {error}
                </div>
            </div>
            }

            {status === "success" && (
                <div className="App-content">
                    <div className="flex-row text-lg">
                        {arr}
                    </div>
                </div>
            )}
        </div>
    )
    }


export default Navigation
