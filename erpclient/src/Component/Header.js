import React from 'react'
// import "./TocH.css"
// Initialization for ES Users
import {
    Dropdown,
    Collapse,
    initTE,
} from "tw-elements";

initTE({ Dropdown, Collapse });

function Header() {
    return (
        <div>
            <nav
                class="relative flex w-full flex-nowrap items-center justify-between bg-neutral-800 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
                data-te-navbar-ref>
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                    <div class="ml-2">
                        <a class="text-xl text-neutral-800 dark:text-neutral-200" href="/"
                        >
                            <img
                                src="https://i.postimg.cc/kXwqjXLd/TIST-Name-2.png"
                                style={{ height: "40px" }}
                                alt="TE Logo"
                                loading="lazy" />
                        </a>
                    </div>
                    {/* <!-- Hamburger button for mobile view --> */}
                    <button
                        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#navbarSupportedContent2"
                        aria-controls="navbarSupportedContent2"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        {/* <!-- Hamburger icon --> */}
                        <span class="[&>svg]:w-7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="h-7 w-7">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    {/* <!-- Collapsible navbar container --> */}
                    <div
                        class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent2"
                        data-te-collapse-item>
                        {/* <!-- Left links --> */}
                        <ul
                            class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row"
                            data-te-navbar-nav-ref>
                            {/* <!-- Home link --> */}
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/"
                                    data-te-nav-link-ref
                                >
                                    About Us
                                </a>
                            </li>
                            {/* <!-- Features link --> */}
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Academics"
                                    data-te-nav-link-ref
                                >
                                    Academics
                                </a>
                            </li>
                            {/* <!-- Pricing link --> */}
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Admission"
                                    data-te-nav-link-ref
                                >
                                    Admission
                                </a>
                            </li>
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="flex items-center px-6 pb-2 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Department"
                                    type="button"
                                    id="dropdownMenuButton2"
                                    data-te-dropdown-toggle-ref
                                    aria-expanded="false">
                                    Department
                                    <span class="ml-2 w-2">
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
                                </a>
                                <ul
                                    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButton2"
                                    data-te-dropdown-menu-ref>
                                    <li>
                                        <a
                                            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/COMPUTER SCIENCE AND ENGINEERING"
                                            data-te-dropdown-item-ref
                                        >
                                            COMPUTER SCIENCE AND ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/MECHANICAL ENGINEERING"
                                            data-te-dropdown-item-ref
                                        >
                                            MECHANICAL ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="CIVIL ENGINEERING"
                                            data-te-dropdown-item-ref
                                        >
                                            CIVIL ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/ELECTRICAL AND ELECTRONICS ENGINEERING"
                                            data-te-dropdown-item-ref
                                        >
                                            ELECTRICAL AND ELECTRONICS ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/ELECTRONICS AND COMMUNICATION ENGINEERING"
                                            data-te-dropdown-item-ref
                                        >
                                            ELECTRONICS AND COMMUNICATION ENGINEERING
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/INFORMATION TECHNOLOGY"
                                            data-te-dropdown-item-ref
                                        >
                                            INFORMATION TECHNOLOGY
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                            href="/ARTIFICIAL INTELLIGENCE AND DATA SCIENCE"
                                            data-te-dropdown-item-ref
                                        >
                                            ARTIFICIAL INTELLIGENCE AND DATA SCIENCE
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Campus Life"
                                    data-te-nav-link-ref
                                >
                                    Campus Life
                                </a>
                            </li>
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Placement"
                                    data-te-nav-link-ref
                                >
                                    Placement
                                </a>
                            </li>
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/Research"
                                    data-te-nav-link-ref
                                >
                                    Research
                                </a>
                            </li>
                            <li
                                class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1"
                                data-te-nav-item-ref>
                                <a
                                    class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                                    href="/ERPLogin"
                                    data-te-nav-link-ref
                                >
                                    ERP Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header

