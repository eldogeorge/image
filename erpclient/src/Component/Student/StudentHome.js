import React, { useContext, useEffect, useState } from 'react'
// Initialization for ES Users
import {
  Ripple,
  Input,
  initTE,
} from "tw-elements";
import SpinningC from '../SpinningC';
import { deleteContext, registerContext } from '../../studentContext/ContextShare';
import { getAllStudents, removeStudent } from '../../Services/Allapi';
import TableStudent from './TableStudent';

initTE({ Ripple, Input });
function StudentHome() {

  // State to store search data
  const [search,setSearch]=useState("")

  // GASS5 create state to store all students
  const [allStudents, setAllStudents] = useState([])

  // CRS6 then goto student Register
  const { registerData, setregisterData } = useContext(registerContext)

  // 3 
  const { deleteData, setDeleteData } = useContext(deleteContext)

  // GASS6 api call to get all students
  const getStudents = async () => {
    const response = await getAllStudents(search)
    // console.log(response);
    setAllStudents(response.data)
  }
  console.log(allStudents);

  console.log(search);

  // funcation to delete student
  const deleteStudent = async (id) => {
    const { data } = await removeStudent(id)

    // store in delete context
    setDeleteData(data)
    getStudents()
  }

  // state to handle the spain 
  const [showSpain, setSpain] = useState(false)

  useEffect(() => {

    getStudents()

    setTimeout(() => {
      setSpain(true)
    }, 1000)

  }, [search])

  // use effect will work according to the search state

  return (
    <div >
      {


        registerData ?
          // <Alert variant="success" dismissible className='w-25 container'>
          //   {registerData.fname} Added Successfully....
          // </Alert> : ''
          <div
            onClose={() => setregisterData("")}

            class="mb-3 hidden w-50  items-center rounded-lg bg-success-100 px-6 py-5 text-base text-success-800 data-[te-alert-show]:inline-flex"
            role="alert"
            data-te-alert-init
            data-te-alert-show>
            {registerData.fname} Added Successfully..
            <button
              type="button"
              class="ml-auto btn-close box-content rounded-none border-none p-1 text-success-900 opacity-50 hover:text-success-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-alert-dismiss
              aria-label="Close">
              <span
                class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6">
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div> : ""
      }
      {

        deleteData ?
          // <Alert variant="danger" dismissible className='w-25 container'>
          //   {deleteData.fname} Delete Successfully....
          // </Alert> : ''
          <div
            onClose={() => setDeleteData("")}

            class="mb-3 hidden w-50 items-center rounded-lg bg-warning-100 px-6 py-5 text-base text-warning-800 data-[te-alert-show]:inline-flex"
            role="alert"
            data-te-alert-init
            data-te-alert-show>
            {deleteData.fname} Deleted Successfully..
            <button
              type="button"
              class="ml-auto btn-close box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-alert-dismiss
              aria-label="Close">
              <span
                class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6">
                  <path
                    fill-rule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div> : ""
      }
      <div class="container">
        <div class="row">
          <div class="grid lg:grid-cols-3">
            <div class="m-3">
              <div class="relative mb-4 flex w-full flex-wrap items-stretch">
                <input
                onChange={e=>setSearch(e.target.value)}
                  type="search"
                  class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3" />

                {/* <!--Search button--> */}
                <button
                  class="relative border-2 bg-success px-6 py-2 text-xs font-medium uppercase text-light transition duration-150 ease-in-out hover:bg-success hover:bg-success-5 focus:outline-none focus:ring-0"
                  type="button"
                  id="button-addon3"
                  data-te-ripple-init
                  style={{ width: '30%' }}
                >
                  <i class="fa-solid fa-magnifying-glass fa-fade me-3"></i><span className='fs-4'>Search</span>

                </button>
              </div>
            </div>
            <div></div>
            <div class='m-3'>
              <a
                href="/StudentStudentRegister"
                type="button"
                class="inline-block rounded bg-info px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                style={{ width: '30%', height: '72%' }}
              >
                <i class="fa-solid fa-user-plus fa-shake"></i> Add
              </a>
            </div>
          </div>
        </div>

      </div>
      {
        // GES9 then goto tableE.js  RES6 then goto tableE.js
        showSpain ? <TableStudent studentstoDisplay={allStudents} delStudent={deleteStudent} /> : <SpinningC></SpinningC>

      }
    </div >
  )
}

export default StudentHome