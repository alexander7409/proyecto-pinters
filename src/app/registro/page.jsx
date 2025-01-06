"use client"
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react"


export default function Registro() {

    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const registrarUsuarioEmail = async (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert(`Usuario registrado: ${user.email}`)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    }


    return (

        <div className=" flex justify-center items-center h-screen bg-white rounded-r-2xl border-none ">
            <button
                onClick={() => setShowModal(true)} // Abre el modal al hacer clic
                className="bg-red-500 text-white px-6 py-2 rounded-full"
            >
                Registrarse
            </button>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative max-h-[100vh]">
                        {/* Botón para cerrar el modal */}
                        <button
                            onClick={() => setShowModal(false)} // Cierra el modal al hacer clic
                            className="absolute top-4 right-4  text-black text-xl rounded-full  hover:bg-gray-100 px-2 py-1 max-w-3xl"
                        >
                            ✖
                        </button>


                        <div className="flex flex-col items-center">
                            <img className="flex items-center text-red-700 w-8" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" />
                            <h1 className="font-bold text-2xl">Bienvenido a Pinterest</h1>
                            <p>Encuentra nuevas ideas para probar </p>
                        </div>

                        <p>Correo</p>
                        <input type="text" placeholder="Correo" className="w-full rounded-xl text-gray-600 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300" value={email}
                            onChange={(e) => setEmail(e.target.value)} />

                        <p>Contraseña</p>
                        <input type="password" placeholder="Contraseña" className="w-full rounded-xl text-gray-600 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300" value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <p>Fecha de nacimiento <span className="inline-flex items-center justify-center w-4 h-4 bg-gray-500 text-white rounded-full font-bold mb-2">!</span></p>
                        <input type="text" placeholder="dd/mm/aaaa" className="w-full rounded-xl text-gray-600 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300" />

                        <div className=" flex justify-center mt-3">
                            <button onClick={() => registrarUsuarioEmail(email, password)} className="bg-red-500 text-center text-white rounded-full w-2/3 h-10 px-4 py-1">Continuar</button>
                        </div>
                        <div className="flex justify-center mb-3">
                            <p className="text-center text-xs font-bold mb-0 mt-3">O</p>
                        </div>
                        <button className="w-64 border border-gray-400 py-3 ml-16 rounded-full text-center hover:bg-gray-100">Iniciar sesion con Google</button>
                        <div className="flex justify-center text-center items-center flex-col gap-3 mt-3">
                            <p className="text-slate-400 font-serif">Sin continuas, aceptas los <span className="text-black">Términos del servicio</span>  de <br />Pinteret y confirmas que has leido nuestra <br /> <span className="text-black text-center"> Politica de privacidad.</span> <br /> <span className="text-black">Aviso de recopilacion de datos.</span></p>
                            <p>¿Ya eres mientro? Inicia secion</p>
                        </div>
                        <div className="bg-gray-200 w-full rounded-b-md mt-2">
                            <p className="text-center py-3 m-0">Crear una cuenta para empresas gratuita</p>
                        </div>


                    </div>
                </div>
            )}
        </div>
    );


}