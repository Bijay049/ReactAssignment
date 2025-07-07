import React from "react";
import imageone from "../assets/bg-image1.jpg";
import imagetwo from "../assets/bg-image2.jpg";
import imagethree from "../assets/bg-image3.jpg";
import imagefour from "../assets/bg-image4.jpg";
import imagefive from "../assets/bg-image5.jpg";
import { FaPlus } from "react-icons/fa";

function Gallery() {
  const galleryItem = [
    {
      title: "All",
    },
    {
      title: "Human",
    },
    {
      title: "Nature",
    },
    {
      title: "Country",
    },
    {
      title: "Video",
    },
  ];

  const images = [
    {
      image: imageone,
    },
    {

      image:imagetwo
      // image:
      //   "https://images.unsplash.com/photo-1721332149274-586f2604884d?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image: imagefour,
    },
    {
      image: imagefive,
    },
    {
      image: imageone,
    },
    {
      image:imagetwo
      // image:
      //   "https://images.unsplash.com/photo-1733178262883-18a3080e7a5e?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      image: imagetwo,
    },
    {
      image:imagethree
      // image:
      //   "https://images.unsplash.com/photo-1675110973742-4e4c19b37399?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image: imagefive,
    },
    {
      image: imagethree,
    },
  ];

  const PhotoOverlay = () => (
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
      <div className="bg-orange-500 cursor-pointer text-white p-4 rounded-full hover:bg-black transition">
        <FaPlus />
      </div>
    </div>
  );
  return (
    <div className="mt-[50px] px-36 ">
      <div className="flex justify-center cursor-pointer  items-center gap-11 text-[25px] font-semibold  ">
        {galleryItem.map((val, i) => {
          return <div className="hover:text-red-400 hover:underline active:uderline transition-all duration-500 ease-in-out">{val.title}</div>;
        })}
      </div>
      <div className="grid-cols-4 grid gap-x-3 gap-y-3 pt-7">
        {images.map((val, i) => {
          return (
            <div className="w-full z-20 relative group overflow-hidden ">
              <img
                src={val.image}
                alt="images"
                className="w-full h-full group-hover:scale-[1.5] relative ransition-all ease-out duration-1000 cursor-pointer "/>
                
               {/* <div className="h-10 flex justify-center items-center text-white hidden group-hover">
                <div>+</div>
               </div> */}
                
              {PhotoOverlay()}
            
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-[50px]">
        <button className="outline-none px-5 py-3 border-2 border-red-400 rounded-full bg-white hover:bg-red-400 hover:text-white transition-all duration-500 ease-in-out">View More</button>
      </div>
    </div>
  );
}

export default Gallery;
