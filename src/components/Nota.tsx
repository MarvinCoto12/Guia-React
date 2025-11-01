import { useState } from "react";

function Nota({ nota }: { nota: number }) {
    const [mensaje, setMensaje] = useState("");

    const procesarNota = () => {
        if (nota < 0 || nota > 10) {
            setMensaje("Nota Incorrecta");
        } else if (nota >= 0 && nota <= 6.9) {
            setMensaje("Nota Reprobada");
        } else if (nota >= 7 && nota <= 10) {
            setMensaje("Nota Aprobada");
        }
    };

    return (
        <div>
            <h4>Nota Puesta: {nota}</h4>
            <button onClick={procesarNota}>Procesar Nota</button>
            <p>{mensaje}</p>
        </div>
    );
}

export default Nota;
