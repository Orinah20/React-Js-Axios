/*
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import useAPI from "./useAPI";
import {useParams} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropData() {

    let { application_code } = useParams()

    const {status, error, response} = useAPI({
        method:'GET',
        url:`http://85.159.214.103:8105/api/rest/master/applications/model-information/${application_code}`,
        headers: {
            'AuthToken': 'LTFMOjo0MTQ3NjdlMDFmMjM1YzEyZDc4NTczNjY2ODMzY2M3YjY2Y2E5NjJjM2I0NWYwMjZkMTVhMzA4MjIyMWUzYzhk',
            'RequestReference': 'bnnnnkkkmkk'
        }
    }, application_code)

        return (
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
                    <div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    <div>Datamap Dictionary</div>
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    className={classNames(
                                                        active ? 'cursor-pointer bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Creation Datamap
                                                </a>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Deletion Datamap
                                                </a>
                                            )}
                                        </Menu.Item>

                                        <Menu.Item>
                                            {({active}) => (
                                                <a
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block px-4 py-2 text-sm'
                                                    )}
                                                >
                                                    Modification Datamap
                                                </a>
                                            )}
                                        </Menu.Item>

                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                }
                </div>
        )
}
*/
