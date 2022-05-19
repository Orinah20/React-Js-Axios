import useAPI from "./useAPI";
import {useParams} from "react-router-dom";
import React, {useState} from "react";
import AceEditor from "react-ace";
import './App.css'

import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-twilight";

function Main(){

    let {application_code} = useParams()

    let [selectedValue, setSelectedValue] = useState("datamap_dictionary")

    const handleClick = () => {
        console.log(selectedValue)
    }

    const {status, response, error} = useAPI({
        method:'GET',
        url:`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,
        headers: {
            'AuthToken': 'LTFMOjo5YTk3YzlkZGRmNWM0ZTQ4OTQyYTA1NmNjOTYyZDJhYmJhOTI1NzU1MDhlODA0OTQ4YTFmNjhkMTkwMzYzY2E4',
            'RequestReference': 'bnnnnkkkmkk'
        }
    }, application_code)


    return(
        <div>
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
                <div className={"h-fit view"}>
                    <div className="fixed flex flex-row justify-end items-center z-20 w-full pt-2 pr-10">
                        <div>
                            <select className={"cursor-pointer rounded bg-gray-200 p-1"} value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                                <option value={"datamap_dictionary"}>Datamap</option>
                                <option value={"creation_datamap_xml"}>Creation</option>
                                <option value={"deletion_datamap_xml"}>Deletion</option>
                                <option value={"modification_datamap_xml"}>Modification</option>
                            </select>
                        </div>
                    </div>

                    <div className={"h-full"}>
                        <AceEditor
                            className={"relative top-12 left-60 p-5"}
                            mode="xml"
                            theme="twilight"
                            name="UNIQUE_ID_OF_DIV"
                            wrapEnabled={true}
                            width={"1125px"}
                            readOnly={false}
                            height={"530px"}
                            onChange={value => setSelectedValue(value)}
                            value={response[selectedValue]}
                            setOptions={{useWorker:false}}
                            editorProps={{ $blockScrolling: false }}
                            fontSize={"14px"}
                        />
                    </div>

                    <div className={"px-10 flex justify-end items-end w-screen"}>
                        <button onClick={() => handleClick()} className={"active:bg-gray-200 active:text-black bg-gray-800 rounded text-white px-10 py-1"}>Save</button>
                    </div>

                </div>
            }

        </div>
    )
}
export default Main
