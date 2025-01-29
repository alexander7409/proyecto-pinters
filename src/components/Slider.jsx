"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
 
const Slider = () => {
    const [textos, setTextos] = useState([
        {  valor: "idea de ropa de verano", color: "#0076D3",
            imagen1 : "https://i.pinimg.com/236x/63/48/02/634802cc7cb164d5799162dc55b42659.jpg",
            imagen2 : "https://i.pinimg.com/736x/90/7c/25/907c25eb6a23b401dc81c92a7f004626.jpg",
            imagen3 : "https://i.pinimg.com/236x/68/b1/81/68b1811a9ba8646ea05e40fa6c22257a.jpg",
            imagen4 : "https://i.pinimg.com/236x/dc/61/00/dc610038d2a2b429a3219ccf52195ca6.jpg",
            imagen5 : "https://i.pinimg.com/236x/df/e4/a3/dfe4a3c85817b5410b83cc7d59f69b0e.jpg",
            imagen6 : "https://i.pinimg.com/236x/24/6e/58/246e58df3165b9f8c863463b5d99162d.jpg",
            imagen7 : "https://i.pinimg.com/236x/3d/54/f2/3d54f2798cc2af1dfe5a5de0a1b7edc5.jpg" },
        {  valor: "actividad para niños", color: "#618C7B",
            imagen1: "https://i.pinimg.com/736x/58/46/e6/5846e636a90bae935fa02a5fc372600c.jpg",
            imagen2: "https://i.pinimg.com/474x/03/66/5f/03665ffb92d7b1401a0558f1b69ad4c0.jpg",
            imagen3: "https://i.pinimg.com/236x/cd/a6/27/cda627ae6104581b6077ff43ecfa2b91.jpg",
            imagen4: "https://i.pinimg.com/236x/4e/bf/bf/4ebfbfb0e050df8de107e1c6d8d1b2be.jpg",
            imagen5: "https://i.pinimg.com/236x/5a/e3/17/5ae3179b43b4dba73d305cf2130690bf.jpg",
            imagen6: "https://i.pinimg.com/236x/b5/5d/ed/b55ded9acd88e03607aa4e92641caae2.jpg",
            imagen7: "https://i.pinimg.com/236x/d7/60/2a/d7602a3727adb7381ec062df2d8e183d.jpg" },
        {  valor: "idea para una cena especial", color: "#C79515",
            imagen1: "https://i.pinimg.com/236x/a4/a1/45/a4a145053115e4e52a230753d232a021.jpg",
            imagen2: "https://i.pinimg.com/236x/da/d8/2d/dad82d0cd280c25c92efcd8690feeee9.jpg",
            imagen3: "https://i.pinimg.com/474x/f5/8b/72/f58b728b80270c6ca022f47c53a1247e.jpg",
            imagen4: "https://i.pinimg.com/736x/19/b3/2b/19b32b4b02c6ca652c90978d61464052.jpg",
            imagen5: "https://i.pinimg.com/236x/e7/f9/7f/e7f97fdf5a4adb34190e08e9d1653233.jpg",
            imagen6: "https://i.pinimg.com/236x/7d/25/78/7d2578a0a0f5558011190cbac5e03326.jpg",
            imagen7: "https://i.pinimg.com/236x/90/19/9e/90199e497e6f7b14a3ec570c73140b4b.jpg" },
        {  valor: "idea de bricolaje", color: "#407A57",
            imagen1: "https://i.pinimg.com/236x/6b/88/f4/6b88f4d333b526640a9d07fac90273a9.jpg",
            imagen2: "https://i.pinimg.com/236x/fb/65/bb/fb65bb9b4039b7904a0095683e07171f.jpg",
            imagen3: "https://i.pinimg.com/474x/83/23/9c/83239c4eb0a209fd267b1faa62a83c09.jpg",
            imagen4: "https://i.pinimg.com/236x/fb/a7/6a/fba76a41d2d8313fcf0127f6deb7ed23.jpg",
            imagen5: "https://i.pinimg.com/236x/32/18/31/321831217e3e07c04a875afa96a33f22.jpg",
            imagen6: "https://i.pinimg.com/236x/7a/a9/92/7aa9927a38292351f2b2c16edac67af5.jpg",
            imagen7: "https://i.pinimg.com/236x/1f/bc/4a/1fbc4acb29fef0f19a25425ec329be80.jpg" },
    ]);
    const [contador, setContador] = useState(0);
 
    useEffect(() => {
        // Crear el intervalo
        const intervalo = setInterval(() => {
            setContador((prevContador) => (prevContador + 1) % textos.length);
        }, 5000);
 
        // Limpiar el intervalo al desmontar el componente
        return () => {
            clearInterval(intervalo);
        };
    }, [textos.length]);
 
    return (
        <>
            <div className="text-center text-[4rem] h-[200px]">
                <p>Encuentra la próxima</p>
                <p className="font-medium" style={{ color: textos[contador].color }}>{textos[contador].valor}</p>
                <div className="flex justify-center gap-3">
                    <div style={{ background: contador == 0 ? textos[1].color : 'lightgrey' }} className="w-3 h-3 rounded-full "></div>
                    <div style={{ background: contador == 1 ? textos[1].color : 'lightgrey' }} className="w-3 h-3 rounded-full "></div>
                    <div style={{ background: contador == 2 ? textos[2].color : 'lightgrey' }} className="w-3 h-3 rounded-full "></div>
                    <div style={{ background: contador == 3 ? textos[3].color : 'lightgrey' }} className="w-3 h-3 rounded-full"></div>
                </div>
            </div>
            <div className="flex items-end gap-2 h-[calc(100vh-200px)]">
                <Image
                    width={1000}
                    className="w-1/7 h-[90%] rounded-lg animate-slide-up"
                    height={1000}
                    src={ textos[contador].imagen1 }
                    alt="imagen#1"
                />
                <Image
                    width={1000}
                    className="w-1/7 h-[80%] rounded-lg animate-slide-up"
                    height={1000}
                    src={textos[contador].imagen2}
                    alt="imagen#2"
                />
                <Image
                    width={1000}
                    className="w-1/7 h-[70%] rounded-lg animate-slide-up"
                    height={1000}
                    src={textos[contador].imagen3}
                    alt="imagen#3"
                />
                <Image
                    width={1000}
                    className="w-1/7 h-[60%] rounded-lg animate-slide-up"
                    height={1000}
                    src={textos[contador].imagen4}
                    alt="imagen#4"
                />
                <Image
                    width={1000}
                    className="w-1/7 h-[70%] rounded-lg animate-slide-up"
                    height={1000}
                    src={textos[contador].imagen5}
                    alt="imagen#5"
                />
                <Image
                    width={1000}
                    className="w-1/7 h-[80%] rounded-lg animate-slide-up"
                    height={1000}
                    src={textos[contador].imagen6}
                    alt="imagen#6"
                />
                <Image
                    width={1000}
                    className="w-1/7 h-[90%] rounded-lg animate-slide-up"
                    height={1000}
                    src={textos[contador].imagen7}
                    alt="imagen#7"
                />
            </div>
        </>
    );
};
 
export default Slider;
 