import React from 'react'
import "./TocH.css"

function Footer() {
    return (
        <footer class="bg-warning rounded-lg shadow dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <ul>
                        <li>
                            <img class="imgl" src="https://i.postimg.cc/kXwqjXLd/TIST-Name-2.png" alt="" />
                        </li>
                        <li>
                            <div class="ph hover:underline">
                                <i class="fa-solid fa-phone" style={{ color: "#e6c700" }}></i>    (+91 484) 2748388, 2749600, 2738126
                            </div>
                        </li>
                        <li>
                            <div class="ads hover:underline">
                                <i class="fa-solid fa-location-dot" style={{ color: "#e6c700" }}></i>   Toc H Institute of Science & Technology
                            </div>
                        </li>
                        <li>
                            <div class="ev hover:underline">
                                <i class="fa-solid fa-envelope-circle-check" style={{ color: "#e6c700" }}></i> Arakkunnam, Ernakulam, Kerala, India
                            </div>
                        </li>
                        <li>
                            <div class="adbook hover:underline">
                                <i class="fa-regular fa-address-book " style={{ color: "#e6c700" }}></i>  Pin: 682 313
                            </div>
                        </li>
                    </ul>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/AdministratorAdminLogin" class="mr-4 hover:underline md:mr-6 ">Admin</a>
                        </li>
                        {/* <li>
                            <a href="/" class="hover:underline">Contact</a>
                        </li> */}
                    </ul>

                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">College™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer