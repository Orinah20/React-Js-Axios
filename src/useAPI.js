import axios from "axios";
import {useEffect, useState} from "react";

function useApi(config, dependency){

    let [status, setStatus] = useState( "idle");
    let [response, setResponse] = useState([]);
    let [error, setError] = useState();

    const getData= async () => {
        try {
            setStatus("loading")
            await
                axios(config)
                    .then((res) => {
                    if (res.status >= 200) {
                        setStatus("success")
                        console.log(res)
                        setResponse(res.data)
                    } else if (res.status <= 299) {
                        setStatus("success")
                        console.log(res)
                        setResponse(res.data)
                    } else {
                        setStatus("error")
                        setError(res.message)
                    }
                })
        }catch (err) {
            setStatus("error")
            console.log(err.message)
            setError(err.message)
        }};

    useEffect(() => {
        getData();
    }, [dependency])

    return {status, response, error}
}

export default useApi;
