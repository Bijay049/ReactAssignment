import React, { useEffect, useState } from "react";
import image1 from '../assets/bg-image1.jpg'
import image2 from '../assets/bg-image2.jpg'

function Home() {
  const ImageData = [
    {
      image:
       image1,
      name: "Amile",
      email: "amile@gmail.com",
    },
    {

        image: image2,
      name: "Jackson",
      email: "jackson@gmail.com",
    },
    {
      image:
       image1,
      name: "Amile",
      email: "amile@gmail.com",
    },
    {

      image: image2,
    name: "Jackson",
    email: "jackson@gmail.com",
  },
  {
    image:
     image1,
    name: "Amile",
    email: "amile@gmail.com",
  },
  {

    image: image2,
  name: "Jackson",
  email: "jackson@gmail.com",
},
  ];

  const [index, setIndex] = useState(0);

  const Next = () => {
    if (index == ImageData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const Prev = () => {
    if (index == ImageData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    let interval = setTimeout(() => {
      Next();
    }, 3000);
    return () => {
      clearTimeout(interval);
    };
  }, [index]);
  return (
    <div className="relative" id="home">
      <a href="#home">  <div className=" bottom-10  right-10 w-10 h-10 bg-red-400 hover:-translate-y-4 z-50 fixed flex justify-center items-center text-[20px] cursor-pointer text-white shadow-lg rounded-full transition-all ease-in-out duration-700">
        &uarr;
      </div></a>
      <div className="w-full h-[100vh] relative overflow-clip bg-white">
        {ImageData.map((val, i) => {
          return (
            <div
              key={i}
              className={`w-full h-full absolute top-0  text-white left-0 bg-cover bg-center transition ${
                i === index ? "translate-x-0" : i>index? "translate-x-full":'-translate-x-full'
              }`}
              style={{ backgroundImage: `url(${val.image})` }}
            >
              <div
                className="z-50
               flex
               justify-center w-full h-full flex-col px-36 "
              >
                <h1 className="text-[82px] font-bold text-transparent bg-gradient-to-tr from-[#f4f6f4] to-[#ffe89e] bg-clip-text">
                  Hello
                  <p> I'm {val.name}</p>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  facilis officia ad accusamus illo doloribus!
                </p>
                <div className="flex items-center gap-3 mt-12">
                  <button className="outline-none px-4 py-2 rounded-full border-2 border-red-400 hover:bg-red-400 cursor-pointer transition-all duration-500 ease-in-out">
                    Get a quote
                  </button>
                  <p className="italic underline ">{val.email}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-full  flex justify-between px-16  absolute top-[45vh] z-50  ">
        <div
          className="h-11 w-11 border
          text-white bg-[ rgba(255, 255, 255, 0.1)] text-3xl flex items-center justify-center rounded-full"
        >
          <button
            onClick={() => {
              Prev();
            }}
          >
            &larr;
          </button>
        </div>
        <div
          className="h-11 w-11 border
         text-white bg-[ rgba(255, 255, 255, 0.1)]  text-3xl flex items-center justify-center rounded-full"
        >
          <button
            onClick={() => {
              Next();
            }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
