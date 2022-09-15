import type { SingInType, Users } from '../types';
import { api } from './axios';

export interface ResponseType {
    user?:Users,
    token?:string,
    error?:boolean
}

export const SingIn = async ({ email, password }:SingInType) => {
    try {
        const response = await api.post<ResponseType>('/Users/singIn', { email, password });
        return response.data
    } catch (err) {
        console.error(err);
    }
}