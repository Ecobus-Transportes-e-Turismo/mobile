import { api } from "../services/axios";

const findAllServices = async () => {
   try {
        const { data } = await api.get('/Services/');
        return data.services
   } catch (error) {
        console.log("Erro na requisição...", error);
   }
}





export { findAllServices };