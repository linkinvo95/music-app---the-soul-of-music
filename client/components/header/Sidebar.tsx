import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {useState} from 'react';
import Logo from './../Logo';

const Sidebar = () => {
    const [collapseShow, setCollapseShow] = useState("hidden");
    const router = useRouter()
    return (
        <>
         <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 
         md:overflow-y-auto md:flex-row md:flex-nowrap 
         md:overflow-hidden shadow-xl 
         sidebar_com flex flex-wrap items-center justify-between
         relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              NextJS
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
            </li>
            <li className="inline-block relative">
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/admin/dashboard">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/settings">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-tools mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Settings
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/tables">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Tables
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/maps">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-700 hover:text-blueGray-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-map-marked mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Maps
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                    Register
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/landing">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Landing Page
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/profile">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Profile Page
                  </a>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
        </>
    );
};

export default Sidebar;



{/* <section className=" fixed top-0 
z-40 flex 
flex-col
p-4 items-center
sidebar_com w-56 h-[1900px]
space-y-8">
        <Logo />
        <h2>BROWSE MUSIC</h2>
        <nav>
            <ul className='mr-20'>
                <li className='flex p-2' ><img className='w-7 mr-7 icon' src="img/home.svg" alt="Home_icon" />
                    <Link href='/'><a className=' hover:text-red-600 icon '>Family</a></Link></li>
                <li className='flex p-2'><img className='w-6 mr-7 icon' src="img/microphone.svg" alt="microphone_icon" />
                    <Link href='/tracks'><a className='hover:text-red-600 icon'>Artist</a></Link></li>
                <li className='flex p-2'><img className=' w-7 mr-6 icon' src="img/album.svg" alt="Album_icon" />
                    <Link href='/albums'><a className='hover:text-red-600 icon'>Album</a></Link></li>
                <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/gender.svg" alt="gender_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Gender</a></Link></li>
                <li className='flex p-2'><img className=' w-6 ml-1 mr-7 icon' src="img/follow.svg" alt="follow_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Follow</a></Link></li>
            </ul>

        </nav>
        <h2>YOUR MUSIC</h2>
        <nav>
            <ul className='mr-20'>
                <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon bg-red-400 hover:fill-slate-300' src="img/love.svg" alt="love_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Favorites</a></Link></li>
                <li className='flex p-2'><img className='w-6 ml-1 mr-7 icon' src="img/history.svg" alt="history_icon" /><Link href='#'><a className='hover:text-red-600 icon'>History</a></Link></li>
                <li className='flex p-2'><img className='w-5 ml-1 mr-7 icon' src="img/playlist.svg" alt="playlist_icon" /><Link href='#'><a className='hover:text-red-600 icon'>Playlist</a></Link></li>
                <li className='flex p-2'>
                    <svg 
                    className='w-5 ml-1 mr-7 icon fill-red-400 hover:fill-slate-300'
                    width="29.956px" height="29.956px" viewBox="0 -0.43 29.956 29.956" id="_10_-_Love"
                        data-name="10 - Love"
                        xmlns="http://www.w3.org/2000/svg">
                        <path id="_10_-_Love-2" data-name="10 - Love" d="M16,4.986A8.785,8.785,0,0,0,3.522,4.075c-3.2,3.038-3.395,9.113-.2,15.189,2.131,4.325,7.576,8.69,12.14,11.581a1,1,0,0,0,1.07,0c4.567-2.893,10.017-7.262,12.15-11.6,3.188-6.063,2.99-12.133-.207-15.169A8.785,8.785,0,0,0,16,4.986h0ZM15.154,7.2a1,1,0,0,0,1.692,0A6.792,6.792,0,0,1,27.1,5.525h0A6.408,6.408,0,0,1,28.92,9.452a15.475,15.475,0,0,1-2.015,8.882c0,.008-.009.017-.013.025C24.98,22.251,20.161,26.115,16,28.812c-4.161-2.7-8.98-6.561-10.892-10.453,0-.008-.008-.017-.013-.025A15.483,15.483,0,0,1,3.08,9.452,6.414,6.414,0,0,1,4.9,5.525,6.792,6.792,0,0,1,15.154,7.2Z" transform="translate(-1.023 -1.896)" fillRule="evenodd" />
                    </svg>
                </li>
            </ul>
        </nav>
    </section> */}