
import {Outlet, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import useAPI from "./useAPI";

function SideNav(){

    let { application_code } = useParams()

    const {status, error, response} = useAPI({
        method: 'GET',
        url: 'http://85.159.214.103:8105/api/rest/master/applications/?page=-1',
        headers: {
            'AuthToken': 'LTFMOjplM2Y4Zjk1MDFjY2Y4YWRkNGM5YTMxM2M4YTM1NWIxZGI0YzNmNjQ4YTVmYTlkNjBlYWY2MmM2MjdiMTQxYzUy',
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

    console.log(application_code)

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
                    <div className=" bg-gray-300 top-12 fixed w-60 p-2 h-full">{result}</div>
                    <Outlet/>
                </div>
            }
        </div>
    )
}

export default SideNav