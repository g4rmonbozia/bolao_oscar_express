import Indicado from "./Indicado";
import React, { useState } from "react";

export default function Categoria(props){

    const [detalhes, setDetalhes] = useState(["","",""]);

    function handleState(valores){
        setDetalhes(valores);
    }
    
    let indicados = props.indicados
    
    indicados.map((indicado) => 
        {   
            if(props.apostas.length == 0){
                indicado.percent = 0;
            } else {
                indicado.percent = (props.apostas.filter((elem) => elem[props.titulo]===indicado.id).length) / props.apostas.length;
            }            
        }     
    );
    
    

    indicados.sort((a, b) => b.percent - a.percent);

    return(
        <div className="categoria">
            <div className="titulo">
                <p>{props.titulo}</p>
            </div>
            <div style={{gridTemplateRows: "1fr" + ((props.indicados.length > 5)?" 1fr":"")}} className="resto">
                {indicados.map((item) => (
                     <Indicado change={handleState} key={item.id} indicado={item} />
                ))
                }
            </div>
            <div className="detalhes">
                <div style={{gridRow:detalhes[1]==""?"1 / 3":"1 / 2"}}>{detalhes[0]}</div>
                <div style={{gridRow:detalhes[1]==""?"3 / 3":"2 / 3"}}>{detalhes[1]}</div>
                <div>{detalhes[2]}</div>
            </div>
        </div>
    )
};