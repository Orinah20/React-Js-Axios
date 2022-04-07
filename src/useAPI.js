import {useEffect, useState} from "react";
import axios from "axios";

function useAPI(config, dependency){

    let [status, setStatus] = useState("idle")
    let [error, setError] = useState(null)
    let [response, setResponse] = useState([])


    const getData = async () => {
        try {
            setStatus("Loading")
            await
                axios(config)
                    .then((res) => {
                        if(res.status >= 200 || res.status <= 299){
                            setStatus("Success")
                            console.log(res)
                            setResponse(res.data)
                        }
                        else{
                            setStatus("Error")
                            console.log(res.message)
                            setError(res.message)
                        }
                    })
        }catch(err) {
            setStatus("Error")
            console.log(err)
            setError(err.message)
        }

    }

    useEffect(() => {
        getData()
    }, [dependency])

    return{status, error, response}
}

export default useAPI