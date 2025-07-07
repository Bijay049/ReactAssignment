import React, { Children } from "react";

function Modal({ SearchShow, setSearchShow, children }) {
  return (
    <div className="relative">
      <div
        className={`border shadow-lg bg-gray-100 px-11 py-10 border-gray-200 w-fit h-fit fixed rounded-md top-72 mx-auto right-0 left-0 z-10 ransition-all duration-700 delay-75 ease-out
       ${SearchShow ? "translate-y-0" : "-translate-y-[1000px]"}`}>     
      
        <div>{children}</div>
        <div
          className="absolute top-2 right-5 text-gray-500 cursor-pointer"
          onClick={() => {
            setSearchShow(false);
            
          }}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default Modal;
