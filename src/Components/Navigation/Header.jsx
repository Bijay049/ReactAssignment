import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import Modal from "../UI/Modal";

function Header() {
  const location = useLocation();
  const [Active, setActive] = useState(0);
  const [SearchShow, setSearchShow] = useState(false);

  useEffect(() => {
    if (SearchShow) {
      document.body.style.transition = "background-color 0.5s ease";
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      document.body.style.transition = "background-color 0.5s ease";
      document.body.style.backgroundColor = "";
    }
    return () => {
      document.body.style.transition = "background-color 0.5s ease";
      document.body.style.backgroundColor = "";
    };
  }, [SearchShow]);

  const navItem = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "About",
      path: "/about",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const headerBg = document.querySelector("#header");
  function bgOnScroll() {
    headerBg.style.backgroundColor = "black";
  }

  return (
    <div id="header" className="w-full py-3 bg-black fixed z-50 " onScroll={bgOnScroll}>
      <Modal SearchShow={SearchShow} setSearchShow={setSearchShow}>
        <div>
          <input
            type="search"
            placeholder="Search and hit enter.."
            className="px-3 py-3 w-72 rounded-l-md"
          />
          <button className="bg-red-400 px-3 py-3 uppercase text-white  font-semibold rounded-r-md ">
            Search
          </button>
        </div>
      </Modal>

      <div className="px-36 text-white flex justify-between sticky " id="header">
        <div className=" text-2xl font-bold w-fit h-fit relative flex">
          <h1> Alime</h1>
          <div className="w-[5px] h-[5px] bg-red-600 absolute -right-3 bottom-[7px] "></div>
        </div>
        <div className="flex gap-9 font-semibold items-center">
          {navItem.map((val, i) => {
            return (
              <Link
                key={i}
                to={val.path}
                className={`cursor-pointer hover:text-red-400 ${
                  val.path === location.pathname
                    ? "text-red-400 underline transition-all duration-700 delay-75 ease-in-out"
                    : "text-white"
                }`}
              >
                <div
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  {val.title}
                </div>
              </Link>
            );
          })}

          <div className="cursor-pointer flex items-center  hover:text-red-400">
            <span>Page</span>
            <GoChevronDown className="relative top-[2px]" />
          </div>
        </div>
        <div>
          <IoSearchOutline
            className="text-2xl font-semibold"
            onClick={() => {
              setSearchShow(true);
            }}
          />
        </div>
      </div>
  
    </div>
  );
}

export default Header;
