export default function Indicado(props){

    let perfil = (props.indicado.ator || props.indicado.atriz || props.indicado.diretor);

    let image = "vazio.png";
    
    if(props.indicado.imagem){
        image = "https://image.tmdb.org/t/p/w500" + props.indicado.imagem;
    }

    function handleHover(){
        props.change([(perfil || props.indicado.cancao)?(props.indicado.ator || props.indicado.atriz || props.indicado.diretor):props.indicado.filme,
            (perfil || props.indicado.cancao)?props.indicado.filme:"",(props.indicado.percent*100).toPrecision(4) + "%"])
    }

    function handleOut(){
        props.change(["", "", ""])
    }
    
    return(
            <div onMouseOver={handleHover} onMouseLeave={handleOut} className={perfil?"perfil":"filme"}>
                {perfil?
                    <svg style={{position:"absolute", left:"0"}} width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                    {(props.indicado.percent!=1)?
                    <path d={"M 40 0 A 40 40, 0, " + (props.indicado.percent>0.5?"1":"0") + ", 0, " + (40 - 40 * Math.sin(2 * Math.PI * props.indicado.percent)) +
                    " " + (40 - 40 * Math.cos(2 * Math.PI * props.indicado.percent)) + " L 40 40 Z"} fill="#b39930"/>
                    :
                    <circle cx="40" cy="40" r="40" fill="#b39930"></circle>
                    }
                    </svg>
                    :
                    <div style={{position: "absolute", bottom: "0", width: "100%", height: props.indicado.percent*100 + "%", backgroundColor: "#b39930"}}></div>
                }
                <div style={{borderRadius:perfil?"50%":"0%", overflow: "clip", display: "flex", alignItems: "center", position: "absolute", width:"90%", height:"90%"}}>
                    <img style={{width:"100%"}} src={image} />
                </div>
            </div>
            
        
    )
};