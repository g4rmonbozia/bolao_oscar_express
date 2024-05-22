import { Outlet, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import { listarIndicados } from "../infra/indicado";
import { listarApostas } from "../infra/aposta";
import { fetchDataFromApi } from "../infra/tmdb";
import Header from "../components/Header";

export default function Layout() {

    const [indicados, setIndicados] = useState([]);
    const [apostas, setApostas] = useState([]);

    useEffect(() => {
        let url = "";
        async function fetchData() {
            let data = await listarIndicados();
            
            data.map(async(elem) => {
                let data_tmdb = "";

                url = "movie/" + elem.filme;
                data_tmdb = await fetchDataFromApi(url);
                elem.filme = data_tmdb.title;

                if(elem.ator){
                    url = "person/" + elem.ator;
                    data_tmdb = await fetchDataFromApi(url);
                    elem.ator = data_tmdb.name;
                    elem.imagem = data_tmdb.profile_path;
                } else if (elem.atriz) {
                    url = "person/" + elem.atriz;
                    data_tmdb = await fetchDataFromApi(url);
                    elem.atriz = data_tmdb.name;
                    elem.imagem = data_tmdb.profile_path;
                } else if (elem.diretor){
                    url = "person/" + elem.diretor;
                    data_tmdb = await fetchDataFromApi(url);
                    elem.diretor = data_tmdb.name;
                    elem.imagem = data_tmdb.profile_path;
                } else {
                    elem.imagem = data_tmdb.poster_path;
                }
            });

            setIndicados(data);

            data = await listarApostas();
            setApostas(data);

            console.log(data);

        };
    
        fetchData();

    }, []);

    return (
        <div style={{ display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
            <Header />
            <div>
                <ul>
                    <li>
                        <Link to={"/"}><FaHome /></Link>
                    </li>
                    <li>
                        <Link to={"/stats"}>Estatísticas</Link>
                    </li>
                    <li>
                        <Link to={"/aposta"}>Faça sua Aposta</Link>
                    </li>
                </ul>
            </div>
            <Outlet context={[indicados, apostas]} />
        </div>
    )
};