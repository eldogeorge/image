import React, { useContext, useEffect, useState } from 'react'
import '../Form.css'
// Initialization for ES Users
import {
  Dropdown,
  Ripple,
  Input,
  initTE,
} from "tw-elements";


import { Col, Container, Row, } from 'react-bootstrap';

// RSAS1 import react toastfy
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editStudent, getSingleStudent } from '../../Services/Allapi';
import { useNavigate, useParams } from 'react-router-dom';
import { registerContext } from '../../studentContext/ContextShare';
import baseURL from '../../Services/BaseUrl';

initTE({ Dropdown, Ripple, Input });

function StudentEdit() {

  // state to hold existing image
  const[existingImg,setExistImg]=useState("")

  const params = useParams().id
  console.log(params);

  const getStudentData = async () => {
    let { data } = await getSingleStudent(params)
    console.log(data);
    setuserData(data)
    setExistImg(data.profile)
    // setImage(data.profile)
  }
  console.log(existingImg);
  useEffect(() => {
    getStudentData()

  }, [])

  // RSS1 state to hold image data
  const [Image, setImage] = useState("")

  // RSS3 create a funcation to store image
  const setSProfile = (s) => {
    console.log(s.target.files[0]);
    setImage(s.target.files[0])
  }
  console.log(Image);


  // RSS4 create to store preview image
  const [Preview, setPreview] = useState("")
  // RSAS4 create an object for usenavigate
  const navigate = useNavigate()

  // state for error alert
  // const [errorMsg, seterrorMsg] = useState('')

  // CRS5 to get context then goto admin home.js
  // const { registerData, setregisterData } = useContext(registerContext)

  useEffect(() => {
    if (Image) {

      // if user input new image thaen reset the existing image
      setExistImg("")

      setPreview(URL.createObjectURL(Image))
    }
  }, [Image])
  // URL RSS5
  console.log(Preview);


  // RSS6 state to hold all other input datas enter by user
  const [userData, setuserData] = useState({
    rollNo: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    department: "",
    admissionQuota: "",
    location: ""
  })

  //RSS7 funcation to update userdata
  const userDetails = (s) => {
    // console.log(s.target.value);
    // let value=s.target.value
    // console.log(s.target.name);
    // let name=s.target.name
    let { value, name } = s.target
    setuserData({ ...userData, [name]: value })
  }
  console.log(userData);

  // BRS2 create funcation for submit button
  const handleEdit = async (s) => {
    s.preventDefault()

    // BRS3 create header
    const headerConfig = {
      "Content-Type": "multipart/form-data"
    }

    // BRS4 create body from data
    const data = new FormData()

    // BRS5 access datas from userdata
    const { rollNo, fname, lname, email, password, mobile, gender, department, admissionQuota, location } = userData



    // RSAS3
    if (rollNo == "") {
      toast.error('Roll Number is Required')
    }
    else if (fname == "") {
      toast.error('First Name is Required')
    }
    else if (lname == "") {
      toast.error('Last Name is Required')
    }
    else if (email == "") {
      toast.error('Email is Required')
    }
    else if (password == "") {
      toast.error('Password is Required')
    }
    else if (mobile == "") {
      toast.error('Phone Number is Required')
    }
    else if (gender == "") {
      toast.error('Gender is Required')
    }
    else if (department == "") {
      toast.error('Department is Required')
    }
    else if (admissionQuota == "") {
      toast.error('Admission Quota is Required')
    }
    else if (Image=="" && existingImg == "") {
      toast.error('Profile is Required')
    }
    else if (location == "") {
      toast.error('Location is Required')
    }
    else {
      // BRS6 add data in formdata
      data.append('student_profile', Image || existingImg)
      Image?data.append('student_profile', Image):data.append('student_profile', existingImg)
      data.append('rollNo', rollNo)
      data.append('fname', fname)
      data.append('lname', lname)
      data.append('email', email)
      data.append('password', password)
      data.append('mobile', mobile)
      data.append('gender', gender)
      data.append('department', department)
      data.append('admissionQuota', admissionQuota)
      data.append('location', location)

      // BRS7 api call
      const response = await editStudent(params,headerConfig, data)
      console.log(response.data);
      if (response.status == 202) {

         alert('Updated Success')
      //   //RSAS5 navigate to admin home
        navigate('/StudentStudentProfile')

        }
        else {
          alert('Updated Failed')
          // console.log(response.response.data);
          // seterrorMsg(response.response.data)
        }
    }


  }

  return (

    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-5'>
            <h1>Edit Student Details</h1>
            <form style={{ width: '50%', marginLeft: '30%' }} id='box1' className='p-5'>
              <div class="mb-1">
                <img
                  src={Preview ? Preview : `${baseURL}/studentUploads/${existingImg}`}
                  class="h-auto max-w-full rounded-full"
                  alt=""
                  style={{ width: '25%', marginLeft: '40%' }}
                />
              </div>
              {/* Roll Number */}
              <div class="relative mb-3 mt-5" data-te-input-wrapper-init>
                <input
                  value={userData.rollNo}
                  // RSS7.1
                  onChange={userDetails}
                  name='rollNo'
                  type="text"
                  required
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputText"
                  placeholder="Roll Number" />
                <label
                  for="exampleFormControlInputText"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Roll Number
                </label>
              </div>


              <div class="grid grid-cols-2 gap-4">
                {/* <!--First name input--> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    value={userData.fname}
                    // RSS7.1
                    onChange={userDetails}
                    name='fname'
                    type="text"
                    required
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput123"
                    aria-describedby="emailHelp123"
                    placeholder="First name" />
                  <label
                    for="emailHelp123"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >First name
                  </label>
                </div>

                {/* <!--Last name input--> */}
                <div class="relative mb-6" data-te-input-wrapper-init>
                  <input
                    value={userData.lname}
                    // RSS7.1
                    onChange={userDetails}
                    name='lname'
                    type="text"
                    required
                    class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleInput124"
                    aria-describedby="emailHelp124"
                    placeholder="" />
                  <label
                    for="exampleInput124"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Last name
                  </label>
                </div>
              </div>

              {/* <!--Email input--> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  value={userData.email}
                  // RSS7.1
                  onChange={userDetails}
                  name='email'
                  type="email"
                  required
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput125"
                  placeholder="Email address" />
                <label
                  for="exampleInput125"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Email address
                </label>
              </div>

              {/* <!--Password input--> */}
              <div class="relative mb-6" data-te-input-wrapper-init>
                <input
                  value={userData.password}
                  // RSS7.1
                  onChange={userDetails}
                  name='password'
                  type="password"
                  required
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput126"
                  placeholder="Password" />
                <label
                  for="exampleInput126"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                >
                  Password
                </label>
              </div>


              {/* Phone Number */}
              <div class="relative mb-3" data-te-input-wrapper-init>
                <input
                  value={userData.mobile}
                  // RSS7.1
                  onChange={userDetails}
                  name='mobile'
                  required
                  type="tel"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputTel"
                  placeholder="Phone Number" />
                <label
                  for="exampleFormControlInputTel"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Phone Number
                </label>
              </div>

              {/* Gender */}
              <p class="mb-5 mr-[32.5rem]">Gender</p>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[5.5rem]">
                <input
                  checked={userData.gender == "male" ? true : false}
                  // RSS7.1
                  onChange={userDetails}
                  name='gender'
                  value={'male'}

                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  // name="flexRadioDefault"
                  id="radioDefault01" />
                <label
                  class="mt-px inline-block pl-[0.15rem] ml-[-23rem] hover:cursor-pointer"
                  for="radioDefault01">
                  Male
                </label>
              </div>
              <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[5.5rem]">
                <input
                  checked={userData.gender == "female" ? true : false}
                  // RSS7.1
                  onChange={userDetails}
                  name='gender'
                  value={'female'}
                  class="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="radio"
                  // name="flexRadioDefault"
                  id="radioDefault01" />
                <label
                  class="mt-px inline-block pl-[0.15rem] ml-[-23rem] hover:cursor-pointer"
                  for="radioDefault01">
                  Female
                </label>
              </div>

              {/* Departments */}
              <div class="relative mb-5 mt-5 flex flex-wrap items-stretch ">
                <label
                  class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  for="inputGroupSelect01"
                >
                  Department
                </label>
                <select
                  value={userData.department}
                  // RSS7.1
                  onChange={userDetails}
                  name='department'
                  required
                  class="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  {/* // RSS7.1.1 */}
                  <option value={'COMPUTER SCIENCE AND ENGINEERING'}>COMPUTER SCIENCE AND ENGINEERING</option>
                  <option value={'MECHANICAL ENGINEERING'}>MECHANICAL ENGINEERING</option>
                  <option value={'CIVIL ENGINEERING'}>CIVIL ENGINEERING</option>
                  <option value={'ELECTRICAL AND ELECTRONICS ENGINEERING'}>ELECTRICAL AND ELECTRONICS ENGINEERING</option>
                  <option value={'ELECTRONICS AND COMMUNICATION ENGINEERING'}>ELECTRONICS AND COMMUNICATION ENGINEERING</option>
                  <option value={'INFORMATION TECHNOLOGY'}>INFORMATION TECHNOLOGY</option>
                  <option value={'ARTIFICIAL INTELLIGENCE AND DATA SCIENCE'}>ARTIFICIAL INTELLIGENCE AND DATA SCIENCE</option>
                </select>
              </div>



              {/* Admission Quota */}
              <div class="relative mb-5 mt-5 flex flex-wrap items-stretch">
                <label
                  class="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  for="inputGroupSelect02"
                >
                  Admission Quota
                </label>
                <select
                  value={userData.admissionQuota}
                  // RSS7.1
                  onChange={userDetails}
                  name='admissionQuota'
                  required
                  class="form-select relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  id="inputGroupSelect02">
                  <option selected>Choose...</option>
                  <option value={"Government Quota"}>Government Quota</option>
                  <option value={"Management Quota"}>Management Quota</option>
                  <option value={"Sport Quota"}>Sport Quota</option>
                  <option value={"NRI Quota"}>NRI Quota</option>
                </select>
              </div>



              {/* Profile photo */}
              <div class="mb-3">
                <label
                  for="formFile"
                  class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Choose Profile Picture
                </label>
                <input
                  // RSS2
                  onChange={setSProfile}
                  required
                  class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="formFile" />
              </div>

              {/* Location */}
              <div class="relative mb-5 mt-5" data-te-input-wrapper-init >
                <input
                  value={userData.location}
                  // RSS7.1 over next BRS
                  onChange={userDetails}
                  name='location'
                  required
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInputCounter"
                  placeholder="Location"
                  data-te-input-showcounter="true"
                  maxlength="20" />
                <label
                  for="exampleFormControlInputCounter"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Location
                </label>
                <div
                  class="absolute w-full text-sm text-neutral-500 peer-focus:text-primary dark:text-neutral-200 dark:peer-focus:text-primary"
                  data-te-input-helper-ref></div>
              </div>

              <div class="text-center lg:text-left">
                <button
                  // BRS1
                  onClick={handleEdit}
                  type="button"
                  class="inline-block   rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"  >
                  Update
                </button>
              </div>
            </form>

          </Col>
        </Row>
      </Container>
      {/* RSAS2 */}
      <ToastContainer position="top-center" theme="light" autoClose={8000} />
    </div>
  )
}


export default StudentEdit