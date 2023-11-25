import React from 'react'
import baseURL from '../../Services/BaseUrl'
import { Button, ButtonGroup, Image } from 'react-bootstrap'
// Initialization for ES Users
import {
    Dropdown,
    Ripple,
    initTE,
} from "tw-elements";
import { Link } from 'react-router-dom';


initTE({ Dropdown, Ripple });
function TableStudent({ studentstoDisplay, delStudent }) {

    return (
        <div class="container mx-auto">
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-left text-sm font-light">
                                <thead class="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">S No.</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Roll Number</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Name</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Phone Number</th>
                                        {/* <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Email</th> */}
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Profile</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col" class="px-6 py-4">Department</th>
                                        <th style={{ backgroundColor: '#BAFF39', color: 'black' }} scope="col">Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentstoDisplay?.length > 0 ? studentstoDisplay.map((s, index) => (
                                            <tr
                                                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                <td class="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.rollNo}</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.fname + " " + s.lname}</td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.mobile}</td>
                                                {/* <td class="whitespace-nowrap px-6 py-4">{i.email}</td> */}
                                                <td>
                                                    {/* GEIS2 */}
                                                    <Image src={`${baseURL}/studentUploads/${s.profile}`} roundedCircle style={{ width: '100px' }} className='ms-3' />
                                                </td>
                                                <td class="whitespace-nowrap px-6 py-4 font-semibold">{s.department}</td>
                                                <td>
                                                    {/* <div class="relative" data-te-dropdown-position="dropend">
                                                        <button
                                                            class="flex items-center whitespace-nowrap rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-secondary-900 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-succuss-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                                            type="button"
                                                            id="dropdownMenuButton1e"
                                                            data-te-dropdown-toggle-ref
                                                            aria-expanded="false"
                                                            data-te-ripple-init
                                                            data-te-ripple-color="light">
                                                            <i class="fa-solid fa-ellipsis-vertical fa-beat"></i>
                                                            <span class="ml-2 w-1.5">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                    class="h-5 w-5">
                                                                    <path
                                                                        fill-rule="evenodd"
                                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                                        clip-rule="evenodd" />
                                                                </svg>
                                                            </span>
                                                        </button> */}
                                                        {/* <ul
                                                            class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                                            aria-labelledby="dropdownMenuButton1e"
                                                            data-te-dropdown-menu-ref> */}
                                                            <>
                                                                <Link to={`/Studentview/${s._id}`}>
                                                                    <a
                                                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"

                                                                        data-te-dropdown-item-ref
                                                                    >
                                                                        <i class="fa-regular fa-eye fa-beat-fade me-3"></i>View
                                                                    </a>
                                                                </Link>
                                                            </>
                                                            <>
                                                                <Link to={`/Studentedit/${s._id}`}>
                                                                    <a
                                                                        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"

                                                                        data-te-dropdown-item-ref
                                                                    >
                                                                        <i class="fa-solid fa-scissors fa-shake me-3"></i>Edit
                                                                    </a>
                                                                </Link>
                                                            </>
                                                            <>

                                                                <a
                                                                    onClick={() => delStudent(s._id)}
                                                                    class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"

                                                                    data-te-dropdown-item-ref
                                                                >
                                                                    <i class="fa-solid fa-trash-can fa-bounce me-3"></i>Delete
                                                                </a>

                                                            </>
                                                        {/* </ul> */}
                                                    {/* </div> */}
                                                </td>
                                            </tr>
                                        )) : <p>No Students Are Presents</p>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableStudent