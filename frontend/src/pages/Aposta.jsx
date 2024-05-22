import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ListaApostas from "../components/ListaApostas";
import FormAposta from "../components/FormApostas";

export default function Aposta() {

    const [indicados, apostas] = useOutletContext();
    const [apostaId, setApostaId] = useState("");

    return (
        <>            
            {apostas.length != 0
            &&
                <ListaApostas apostas={apostas} />
            }
            <FormAposta setApostaId={setApostaId} />
        </>
        
    );
}