"use client"

import Link from "next/link";
import { useState } from "react";
import ModalRegistro from "./ModalRegistro";
import ModalInicio from "./ModalInicio";


export default function NavBar() {

    const [mostrarModalInicio, setMostrarModalInicio] = useState(false)
    const [mostrarModal, setMostrarModal] = useState(false)

    return (
        <nav className=" flex items-center justify-between top-0  w-full bg-white fixed px-6 z-50 h-24 ">
            <Link href={'/'} className="flex items-center text-red-700">
                <img className="w-7 mr-1" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="logo" />

                <span className="font-bold text-lg mr-6">Pinterest</span>
                <div className="flex items-center text-black gap-6">
                    <span className="cursor-pointer hover:text-black">Hoy</span>
                    <span className="cursor-pointer hover:text-black">Explorar</span>
                </div>
            </Link>

            <div className="flex items-center bg-gray-200 px-6 py-2 rounded-full w-full max-w-3xl hover:bg-gray-300 transition duration-200 gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                <input className=" bg-transparent outline-none w-full cursor-text" type="text" placeholder="Encuentra ideas sobre cenas fáciles, moda, etc." />
            </div>
            <div className="flex items-center gap-2 ">
                <button  onClick={()=>setMostrarModalInicio(!mostrarModalInicio)} className="bg-red-500 text-center  rounded-full sm:w-40 px-4 py-2 text-white  hover:bg-red-600 transition duration-200 cursor-pointer">Iniciar Sesiòn</button>
                <button onClick={()=>setMostrarModal(!mostrarModal)} className="bg-gray-200 rounded-full sm:w-40 px-4 py-2 hover:bg-gray-300 transsition duration-200 cursor-pointer">Registrase</button>
                
                <div className="p-2 rounded-full hover:bg-gray-300 transition duration-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.0" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

            </div>

            {
                mostrarModal && <ModalRegistro setMostrarModal={setMostrarModal}/>  
                
            }
            {
                mostrarModalInicio && <ModalInicio setMostrarModalInicio={setMostrarModalInicio}/>
            }
        </nav>

);
}