let categorias = ["Melhor Filme",
                    "Melhor Diretor",
                    "Melhor Ator",
                    "Melhor Atriz",
                    "Melhor Ator Coadjuvante",
                    "Melhor Atriz Coadjuvante",
                    "Melhor Roteiro Original",
                    "Melhor Roteiro Adaptado",
                    "Melhor Filme de Animação",
                    "Melhor Filme Internacional",
                    "Melhor Documentário de Longa-metragem",
                    "Melhor Documentário de Curta-metragem",
                    "Melhor Curta-metragem em Live Action",
                    "Melhor Curta-metragem de Animação",
                    "Melhor Trilha Sonora",
                    "Melhor Canção Original",
                    "Melhor Som",
                    "Melhor Design de Produção",
                    "Melhor Fotografia",
                    "Melhor Maquiagem e Penteados",
                    "Melhor Figurino",
                    "Melhor Edição",
                    "Melhores Efeitos Visuais"];


const getCategorias = (req,res)=>{
    res.status(200).json(categorias)
}

module.exports={categorias, getCategorias}