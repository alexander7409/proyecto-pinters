"use client";
import React, { useEffect, useState } from "react";

const Slider = () => {
    const [textos, setTextos] = useState([
        { valor: "idea de ropa de verano", color: "#0076D3" },
        { valor: "actividad para niños", color: "#618C7B" },
        { valor: "idea para una cena especial", color: "#C79515" },
        { valor: "idea de bricolaje", color: "#407A57" },
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
        <div className="text-center text-[4rem] h-[200px]">
            <p>Encuentra la próxima</p>
            <p className="font-medium" style={{ color: textos[contador].color }}>{textos[contador].valor}</p>
            <div className="flex justify-center gap-3">
                <div style={{ background: contador == 0 ? textos[0].color : 'lightgrey' }} className="w-3 h-3 rounded-full "></div>
                <div style={{ background: contador == 1 ? textos[1].color : 'lightgrey' }} className="w-3 h-3 rounded-full "></div>
                <div style={{ background: contador == 2 ? textos[2].color : 'lightgrey' }} className="w-3 h-3 rounded-full "></div>
                <div style={{ background: contador == 3 ? textos[3].color : 'lightgrey' }} className="w-3 h-3 rounded-full"></div>
            </div>
        </div>
    );
};

export default Slider;
