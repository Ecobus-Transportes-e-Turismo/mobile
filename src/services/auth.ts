import type { SingInType, Users } from '../types';
import { api } from './axios';

export interface ResponseType {
    user:Users | null,
    token:string | null,
    error?:unknown
}

export const SingIn = async ({ email, password }:SingInType):Promise<ResponseType> => {
    try {
        const { data } = await api.post<ResponseType>('/Users/singIn', { email, password });
        return {user:data.user, token:data.token}
    } catch (error) {
        return {
            error:error,
            token:null,
            user:null
        }
    }
}