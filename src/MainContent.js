import useAPI from "./useAPI";
import {useParams} from "react-router-dom";
import DropData from "./Dropdown";
import { Menu, Transition } from '@headlessui/react';
import {ChevronDownIcon} from "@heroicons/react/solid";
import {Fragment, useEffect, useState} from "react";
import MainContent from "./MainContent";
import Select from 'react-select'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Main(){

    let {application_code} = useParams()

    let [selectedValue, setSelectedValue] = useState("datamap_dictionary")

    const {status, response, error} = useAPI({
        method:'GET',
        url:`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,
        headers: {
            'AuthToken': 'LTFMOjo0NmU1NjRmMmJmOTJjNGE4MTkzMjgzMmExOWZkM2FmYjhjNjlhNTA2MDJlM2UxNDFjMDA0YjBjNGE1NzZiZTQw',
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
                <div>
                    <div className="fixed flex flex-row justify-end z-10 w-full pt-2 pr-10">

                      <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <select className={"-z-20"} value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
                                    <option value={"datamap_dictionary"}>Datamap</option>
                                    <option value={"creation_datamap_xml"}>Creation</option>
                                    <option value={"deletion_datamap_xml"}>Deletion</option>
                                    <option value={"modification_datamap_xml"}>Modification</option>
                                </select>

                            </div>


                        </Menu>

                    </div>

                    <div className="flex flex-row relative top-12 w-9/12 left-60 p-5 -z-20 h-screen">
                        {response[selectedValue]}
                    </div>

                </div>
            }

        </div>
    )
}

export default Main
