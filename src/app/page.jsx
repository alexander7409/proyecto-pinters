"use client"
import Slider from "@/components/Slider";
import useUserStore from "@/store/userStore";
import Image from "next/image";

export default function Home() {
  const { user } = useUserStore();


  return (
    user ? (
      <h1>Hay usuario</h1>
    ) : (
      <div>
        <div className="h-screen">
          <Slider />
        </div>

        <div className="bg-[#FFFD92] w-full h-screen flex-col relative">
          <p className="mt-2 text-center">Así es como funciona</p>


          <div className="flex overflow-hidden relative h-full">
            {/*left side*/}
            <div className="relative w-[50%] h-full overflow-hidden ml-8 my-8">
              <Image
                width={1000}
                className="w-[298px] h-[456px] z-40 absolute top-14 left-[35%]"
                height={1000}
                src={'https://s.pinimg.com/webapp/center-2d76a691.png'}
                alt=""
              />
              <Image
                width={1000}
                className="w-[204px] h-[285px] left-[10%] top-20 z-30 absolute"
                height={1000}
                src={'https://s.pinimg.com/webapp/left-ccce7532.png'}
                alt=""
              />
              <Image
                width={1000}
                className="w-[178px] h-[218px] right-[12%] top-0 z-30 absolute"
                height={1000}
                src={'https://s.pinimg.com/webapp/topRight-6902088a.png'}
                alt=""
              />
              <Image
                width={1000}
                className="w-[164px] h-[258px] right-[12%] bottom-20 z-20 absolute"
                height={1000}
                src={'https://s.pinimg.com/webapp/right-2bd1edfc.png'}
                alt=""
              />

              <div className="absolute inset-0 flex justify-center items-center z-40 ml-5">
                <div className="bg-white rounded-full shadow-md p-4 flex items-center w-[316px] h-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="4.0"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="receta sencilla de pollo para cenar"
                    className="w-full bg-transparent outline-none text-[#6E0F3C] placeholder:text-[#6E0F3C] text-center font-semibold"
                  />
                </div>
              </div>
            </div>
            {/*right side*/}
            <div className="text-center ml-[12.5rem] w-[30%] my-auto ">
              <h1 className="text-[#C31952] text-5xl font-extrabold">
                Busca una idea
              </h1>
              <p className="font-light text-lg leading-8 mt-4 mx-w-[60%] text-[#C31952]">
                ¿Qué es lo siguiente que quieres
                <br />
                probar? Piensa en algo que te
                <br />
                interese, como "receta sencilla de
                <br />
                pollo para cenar", y a ver qué
                <br />
                descubres.
              </p>
              <div className="bg-[#ED0000] rounded-full flex justify-center flex-col items-center w-[98px] h-[48px] text-white ml-[40%] hover:bg-[#B60000] transition duration-200 cursor-crosshair">
                <button>Explorar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#DAFFF6] w-full h-screen flex justify-center items-center text-[#006B6C] pl-10">
          {/*left side*/}
          <div className="flex flex-col justify-center items-center  ">
            <h1 className="text-6xl mt-6 font-bold text-center w-[534px] h-[160px]">
              Guarda las ideas
              <br />
              que te gusten
            </h1>
            <p className="text-[#026C6D] text-xl mb-1 leading-relaxed text-center mx-24">
              Colecciona tus favoritos para
              <br />
              poder verlos más tarde
            </p>
            <div className="bg-[#ED0000] rounded-full flex justify-center flex-col items-center w-[98px] h-[48px] text-white ml-[30px] hover:bg-[#B60000] transition duration-200 cursor-crosshair">
              <button>Explorar</button>
            </div>
          </div>

          {/*right side*/}
          <div className="relative w-[70%] h-full overflow-hidden flex justify-center items-start">
            <div className="my-auto mx-auto w-full">
            <Image
              width={1000}
              className="w-[400px] h-[363px] top-20 right-0"
              height={1000}
              src={'https://s.pinimg.com/webapp/future-home-vibes-adb19e98.png'}
              alt=""
            />
            <p className="absolute top-44 left-16 font-bold text-3xl text-white text-left px-4 py-2">
              Helechos en tu
              <br />
              futuro hogar
              <br />
              que dan buen
              <br />
              rollo
            </p>
            <div className="absolute top-96 left-12 flex space-x-4">
              <Image
                width={300}
                height={300}
                className="w-[90px] h-[130px] rounded-full border-2 border-white"
                src={"https://s.pinimg.com/webapp/future-home1-b8bc36e8.png"}
                alt=""
              />
              <Image
                width={300}
                height={300}
                className="w-[90px] h-[130px] rounded-full border-2 border-white"
                src={"https://s.pinimg.com/webapp/future-home2-31c812cc.png"}
                alt=""
              />
              <Image
                width={300}
                height={300}
                className="w-[90px] h-[130px] rounded-full border-2 border-white"
                src={"https://s.pinimg.com/webapp/future-home3-037e8d49.png"}
                alt=""
              />
            </div>
            </div>
           
          </div>
        </div>
        <div className="bg-[#fff2EB] w-full h-screen flex justify-center items-center ">
          {/*left side*/}
          <div className="fondo-chica w-[50%] h-[100%] ">
          </div>
          {/*right side*/}
          <div className="flex flex-col justify-center items-center w-[50%] h-[100%] ml-auto ">
            <h1 className=" text-[#C31952] text-6xl mt-8 font-bold text-center w-[534px] h-[160px]">Míralo, <br />fabrícalo, <br />pruébalo, <br />hazlo</h1>
            <p className="text-[#C31952] mt-20">lo mejor de Pinterest es descubrir <br />cosas e ideas nuevas de personas de <br />todo el mundo.</p>
            <div className="bg-[#ED0000] rounded-full flex justify-center flex-col items-center w-[98px] h-[48px] text-white ml-[30px] hover:bg-[#B60000] transition duration-200 cursor-crosshair">
              <button>Explorar</button>
            </div>
          </div>

        </div>
      </div>
    )
  );
}