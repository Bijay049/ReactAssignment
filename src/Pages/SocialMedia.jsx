import React from "react";

import imageone from "../assets/bg-image1.jpg";
import imagetwo from "../assets/bg-image2.jpg";
import imagethree from "../assets/bg-image3.jpg";
import imagefour from "../assets/bg-image4.jpg";
import imagefive from "../assets/bg-image5.jpg";
import { FaInstagram } from "react-icons/fa6";

function SocialMedia() {
  const socialMediaImages = [
    {
      image: imageone,
    },
    {
      image: imagetwo,
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
      image: imagetwo,
      // image:
      //   "https://images.unsplash.com/photo-1733178262883-18a3080e7a5e?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      image: imagetwo,
    },
    {
      image: imagethree,
      // image:
      //   "https://images.unsplash.com/photo-1675110973742-4e4c19b37399?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image: imagefive,
    },
    {
      image: imagethree,
    },
    //   {
    //     images:
    //       "https://images.unsplash.com/photo-1533244418366-8ce7b1c1a25f?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     image:
    //       "https://images.unsplash.com/photo-1577731190621-f1e0572d6937?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     image:
    //       "https://images.unsplash.com/photo-1645990965728-e4e36b8fd758?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },

    //   {
    //     image:
    //       "https://images.unsplash.com/photo-1584805276083-896dee70b77b?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //     image:
    //       "https://images.unsplash.com/photo-1577197292417-7938a0dfc494?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   },
    //   {
    //       images:
    //         "https://images.unsplash.com/photo-1533244418366-8ce7b1c1a25f?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1577731190621-f1e0572d6937?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1645990965728-e4e36b8fd758?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },

    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1584805276083-896dee70b77b?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1577197292417-7938a0dfc494?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //       images:
    //         "https://images.unsplash.com/photo-1533244418366-8ce7b1c1a25f?q=80&w=1862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1577731190621-f1e0572d6937?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1645990965728-e4e36b8fd758?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },

    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1584805276083-896dee70b77b?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
    //     {
    //       image:
    //         "https://images.unsplash.com/photo-1577197292417-7938a0dfc494?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     },
  ];

  const PhotoOverlay = () => (
    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
      <div className="bg-orange-500 cursor-pointer text-white p-4 rounded-full hover:bg-black transition">
        <FaInstagram />
      </div>
    </div>
  );
  return (
    <div className="mt-[50px]">
      <div>
        <h1 className="text-[25px] font-semibold text-center">
          Follow Instagram
        </h1>
        <h2 className="text-center text-gray-600">Amile_@photgrapher</h2>
      </div>

      <div className="mt-[30px] flex overflow-hidden ">
        {socialMediaImages.map((val, i) => {
          return (
            <>
            
              <img
                src={val.image}
                alt=""
                className="h-[245px]
                     w-[245px]"
              />
             
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SocialMedia;
