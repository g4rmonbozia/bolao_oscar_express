import axios from "axios";

export const listarIndicados = async (url) => {
    try {
        const { data } = await axios.get("http://localhost:3333/indicados");
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
};