"use client"
import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "@/store/userStore";
 
 
export default function ModalRegistro({ setMostrarModal }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const setUser = useUserStore((state) => state.setUser);
 
 
//funcion de registro con email y contraseña
    const registrarUsuarioEmail = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`Usuario registrado: ${user.email}`)
                router.push('/')
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(`Error: ${errorMessage}`);
            });
 
    };
 
//funcion de registro con Google
    const registrarseGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(`Usuario registrado con Google: ${user.displayName}`);
            console.log(user);
            router.push('/');
            setUser(user);
        } catch (error) {
            console.error(`Error al autenticar con Google: ${error.message}`);
        }
    };
 
 
    return (
        <div className="modal1 {background: rgba(0, 0, 0, 0.75);} fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative max-h-[100vh]">
                {/* Botón para cerrar el modal */}
                <button
                    onClick={() => setMostrarModal(false)} // Cierra el modal al hacer clic
                    className="absolute top-4 right-4  text-black text-xl rounded-full  hover:bg-gray-100 px-2 py-1 max-w-3xl"
                >
                    ✖
                </button>
 
 
                <div className="flex flex-col items-center">
                    <Image height={200} width={200} className="flex items-center text-red-700 w-8" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="" />
                    <h1 className="font-bold text-2xl">Bienvenido a Pinterest</h1>
                    <p>Encuentra nuevas ideas para probar </p>
                </div>
 
                <p>Correo</p>
                <input type="text" placeholder="Correo" className="w-full rounded-xl text-gray-600 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
 
                <p>Contraseña</p>
                <input type="password" placeholder="Contraseña" className="w-full rounded-xl text-gray-600 border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-300" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
 
                <div className=" flex justify-center mt-3">
                    <button onClick={() => registrarUsuarioEmail()} className="bg-red-500 text-center text-white rounded-full w-2/3 h-10 px-4 py-1">Continuar</button>
                </div>
                <div className="flex justify-center mb-3">
                    <p className="text-center text-xs font-bold mb-0 mt-3">O</p>
                </div>
 
                <button onClick={registrarseGoogle} className="w-64 border border-gray-400 py-3 ml-16 rounded-full text-center hover:bg-gray-100">Iniciar sesión con Google</button>
 
                <div className="flex justify-center text-center items-center flex-col gap-3 mt-3">
                    <p className="text-slate-400 font-serif">Si continúas, aceptas los <span className="text-black">Términos del servicio</span>  de <br />Pinterest y confirmas que has leído nuestra <br /> <span className="text-black text-center"> Política de privacidad.</span> <br /> <span className="text-black">Aviso de recopilación de datos.</span></p>
                    <p>¿Ya eres miembro? Inicia sesión</p>
                </div>
 
                <div className="bg-gray-200 w-full rounded-b-md mt-2">
                    <p className="text-center py-3 m-0">Crear una cuenta para empresas gratuita</p>
                </div>
 
 
            </div>
        </div>
    );
}