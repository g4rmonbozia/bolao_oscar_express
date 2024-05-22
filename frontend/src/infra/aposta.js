import axios from "axios";


export async function inserirAposta(novaAposta) {
    if(novaAposta['id']){
    } else {    
        try {
            const response = await axios.post('http://localhost:3333/apostas/add', 
            {
                nome: novaAposta['nome'],
                email: novaAposta['email'],
                "Melhor Filme": novaAposta['Melhor Filme'],
                "Melhor Diretor": novaAposta["Melhor Diretor"],
                "Melhor Ator": novaAposta['Melhor Ator'],
                "Melhor Atriz": novaAposta['Melhor Atriz'],
                "Melhor Ator Coadjuvante": novaAposta['Melhor Ator Coadjuvante'],
                "Melhor Atriz Coadjuvante": novaAposta['Melhor Atriz Coadjuvante'],
                "Melhor Roteiro Original": novaAposta['Melhor Roteiro Original'],
                "Melhor Roteiro Adaptado": novaAposta['Melhor Roteiro Adaptado'],
                "Melhor Filme de Animação": novaAposta['Melhor Filme de Animação'],
                "Melhor Filme Internacional": novaAposta['Melhor Filme Internacional'],
                "Melhor Documentário de Longa-metragem": novaAposta['Melhor Documentário de Longa-metragem'],
                "Melhor Documentário de Curta-metragem": novaAposta['Melhor Documentário de Curta-metragem'],
                "Melhor Curta-metragem em Live Action": novaAposta['Melhor Curta-metragem em Live Action'],
                "Melhor Curta-metragem de Animação": novaAposta['Melhor Curta-metragem de Animação'],
                "Melhor Trilha Sonora": novaAposta['Melhor Trilha Sonora'],
                "Melhor Canção Original": novaAposta['Melhor Canção Original'],
                "Melhor Som": novaAposta['Melhor Som'],
                "Melhor Design de Produção": novaAposta['Melhor Design de Produção'],
                "Melhor Fotografia": novaAposta['Melhor Fotografia'],
                "Melhor Maquiagem e Penteados": novaAposta['Melhor Maquiagem e Penteados'],
                "Melhor Figurino": novaAposta['Melhor Figurino'],
                "Melhor Edição": novaAposta['Melhor Edição'],
                "Melhores Efeitos Visuais": novaAposta['Melhores Efeitos Visuais']
            }
        );
      
            console.log(response.data); 
          
        } catch (error) {
          console.error(error);          
        }
    }
    
}

export const listarApostas = async (url) => {
    try {
        const { data } = await axios.get("http://localhost:3333/apostas");
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
};