


export default function  Sidebar ()  {

    return(
        <div className="min-h-screen flex items-center justify-center">
            <div
                className="flex flex-col left-0 w-14 hover:w-64 md:w-64 bg-indigo-600 h-full text-white transition-all duration-300 border-none z-10 sidebar rounded">
                <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li>
                            <div
                                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 pr-6">
            <span className="inline-flex justify-center items-center ml-4">

            </span>
                                <span className="text-bold tracking-wide truncate">
                    <h6>Zero Carbon dashboard</h6>
            </span>
                            </div>
                        </li>

                        <li className="md:px-4">
                            <div
                               className="active relative flex flex-row items-center h-11 focus:outline-none bg-indigo-800 hover:bg-indigo-500 rounded-lg text-white-600 hover:text-white-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                                    </path>
                                  </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Projects</span>
                            </div>
                        </li>
                        <li className="md:px-4">
                            <div
                               className="relative flex flex-row items-center h-11 focus:outline-none rounded-lg hover:bg-indigo-800 text-white-600 hover:text-white-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                                  <span className="mr-16">Inbox</span>
                                  <span
                                      className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-indigo-50 rounded-full">New</span>
                                </span>
                            </div>
                        </li>
                        <li className="md:px-4">
                            <div
                               className="relative flex flex-row items-center h-11 focus:outline-none rounded-lg hover:bg-indigo-800 text-white-600 hover:text-white-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round"
                                                                                stroke-width="2"
                                                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">
                              <span className="mr-4">Notifications</span>
                              <span
                                  className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide truncate text-yellow-500 bg-green-50 rounded-full">2k</span></span>
                            </div>
                        </li>
                        <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-200 uppercase">Task</div>
                            </div>
                        </li>
                        <li className="md:px-4">
                            <div
                               className="relative flex flex-row items-center h-11 focus:outline-none rounded-lg hover:bg-indigo-800 text-white-600 hover:text-white-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                       stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                                  </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Post</span>
                            </div>
                        </li>
                        <li className="md:px-4">
                            <div
                               className="relative flex flex-row items-center h-11 focus:outline-none rounded-lg hover:bg-indigo-800 text-white-600 hover:text-white-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                       stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                  </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Schedules</span>
                            </div>
                        </li>
                        <li className="md:px-4">
                            <div
                                                       className="relative flex flex-row items-center h-11 focus:outline-none rounded-lg hover:bg-indigo-800 text-white-600 hover:text-white-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                           stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"/>
                                      </svg>
                                    </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Income</span>
                            </div>
                        </li>
                        <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center mt-5 h-8">
                                <div className="text-sm font-light tracking-wide text-gray-200 uppercase">PROFILE</div>
                            </div>
                        </li>
                        <li className="md:px-4">
                            <div
                               className="relative flex flex-row items-center h-14 focus:outline-none rounded-lg hover:bg-indigo-800 text-white-600 hover:text-white-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                          clip-rule="evenodd"/>
                                  </svg>
                                </span>
                                                    <span className=" flex-1 ml-2 text-sm tracking-wide truncate">
                                  <div className="font-semibold text-white">Alexander</div>
                                  <div className="text-white text-sm">Administrator</div>
                                </span>
                            </div>
                        </li>
                        <li className="md:px-4">
                            <div
                               className="relative flex flex-row items-center h-11 focus:outline-none rounded-lg hover:bg-indigo-800 text-white-600 hover:text-white-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                       xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}