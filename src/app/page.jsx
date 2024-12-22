import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <Slider />
      </div>


      <div className=" bg-[#FFFD92] w-full h-screen  flex-col relative">
        <p className="mt-2 text-center">Asi es como fuciona</p>

        <div className="flex overflow-hidden relative h-full">
          <div className="relative w-[50%] h-full overflow-hidden">
            <Image width={1000} className="w-[40%] z-40 absolute top-14 left-[35%] " height={1000} src={'https://s.pinimg.com/webapp/center-2d76a691.png'} alt="" />
            <Image width={1000} className="w-[35%] left-[10%] top-20 z-30 absolute" height={1000} src={'https://s.pinimg.com/webapp/left-ccce7532.png'} alt="" />
            <Image width={1000} className="w-[25%] right-[12%] top-0 z-30 absolute" height={1000} src={'https://s.pinimg.com/webapp/topRight-6902088a.png'} alt="" />
            <Image width={1000} className="w-[25%] right-[12%] bottom-20 z-20 absolute" height={1000} src={'https://s.pinimg.com/webapp/right-2bd1edfc.png'} alt="" />

            <div className="absolute inset-0 flex justify-center items-center z-40 ml-5">
              <div className="bg-white rounded-full shadow-md p-4 flex items-center w-[45%] h-[15%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4.0" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="receta sencilla de pollo para cenar" className="w-full bg-transparent outline-none text-[#6E0F3C] placeholder:text-[#6E0F3C] text-center font-semibold" />
              </div>
            </div>
          </div>

          <div className="text-center ml-[12.5rem] w-[30%]">
            <h1 className="text-[#C31952] text-5xl font-extrabold mt-32">Busca una idea</h1>
            <p className="font-light text-lg leading-8 mt-4  mx-w-[60%] text-[#C31952] ">¿Qué es lo siguiente que quieres <br /> probar? Piensa en algo que te <br /> interese, como "receta sencilla de <br /> pollo para cenar", y a ver qué <br /> descubres.</p>
            <div className="bg-[#ED0000] rounded-full flex justify-center flex-col items-center w-[20%] h-[8%] text-white ml-[40%]  hover:bg-[#B60000] transition duration-200 cursor-crosshair">
              <button>Explorar</button>
            </div>
          </div>

        </div>

      </div>
      <div className="bg-[#DAFFF6] w-full min-h-screen flex flex-col justify-center items-start text-[#006B6C] pl-10">
        <h1 className="text-6xl mb-4 font-bold text-center">Guarda las ideas <br /> que te gusten</h1>
        <p className="text-[#026C6D] text-xl mb-6 leading-relaxed text-center mx-24 ">Colecciona tus favoritos para <br /> poder verlos más tarde</p>
        <div className="bg-[#ED0000] rounded-full flex flex-col justify-center items-center w-[20%] h-[8%] text-white ml-[5%] hover:bg-[#B60000] transition duration-200 cursor-pointer">
          <button>Explorar</button>
        </div>

      </div>
      <div className="flex overflow-hidden relative h-full">
        <div className="relative w-[50%] h-full overflow-hidden">
          <Image width={1000} className="w-[40%] absolute  " height={1000} src={'https://s.pinimg.com/webapp/center-2d76a691.png'} alt="" />
          <imagen></imagen>
          <imagen></imagen>
          <imagen></imagen>

        </div>

      </div>

    </div>
  )

}

