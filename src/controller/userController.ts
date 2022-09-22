import { api } from "../services/axios";
import { Users } from "../types";

type ResponseError = {
    error: string
}

const findSpecificUser = async (idUser:string):Promise<Users | ResponseError> => {
    try {
        const { data } = await api.patch<Users>(`/Users/${idUser}`);
        return data;
    } catch (error) {
        return {
            error:`Error ao consultar o usuário. Error: ${error}`
        }
    }
}

const findAllUsers = async (idUser:string) => {
    const { data } = await api.get(`/Users/${idUser}`);
    return data.users
}

const deleteUser = async (idUser:string) => {
    try {
        const { data } = await api.delete(`/Users/${idUser}`);
        return data
    } catch (error) {
        return {
            error:`Error ao deletar o usuário. Error: ${error}`
        }
    }
}

const alterUser = async (user:Users, idUser:string) => {
    try {
        const { data } = await api.put(`/Users/${idUser}`, user);
        return data
    } catch (error) {
       return {
            error:`Error ao alterar o usuário. Error: ${error}`
        }
    }
}

export { findSpecificUser, deleteUser, findAllUsers, alterUser };