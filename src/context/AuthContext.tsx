import type { Users, SingInType } from "../types";
import { createContext, useState, useEffect, useContext } from "react";
import { SingIn } from '../services/auth';
import AsyncStorege from '@react-native-async-storage/async-storage';
import Loadding from "../components/loadding";

interface AuthContext {
    singed:boolean,
    user:Users | null,
    singIn(data:SingInType):Promise<void>,
    singOut():Promise<void>,
    loadding:boolean,
}

const AuthContext = createContext<AuthContext >({} as AuthContext);

export const AuthProvider = ({children}:any) => {

    const [user, setUser] = useState<null | Users>(null);
    const [loadding, setLoadding] = useState<boolean>(true);

    useEffect(()=>{
        const loadStorege = async ()=> {
            const storegeUSer = await AsyncStorege.getItem('@RNAuth:user')
            const storegeToken = await AsyncStorege.getItem('@RNAuth:token')

            if(storegeToken && storegeUSer){
                setUser(JSON.parse(storegeUSer));
            }
            setLoadding(false);
        }
        loadStorege();
    }, []);

    const singIn = async ({email, password}:SingInType) => {
        setLoadding(true);
        const {user, token} = await SingIn({password, email}); 
        setUser(user);
        await AsyncStorege.setItem('@RNAuth:user', JSON.stringify(user));
        await AsyncStorege.setItem('@RNAuth:token', JSON.stringify(token));
        setLoadding(false);
    }

    const singOut = async () => {
        AsyncStorege.clear().then(()=>{
            setUser(null);
        })
    }
    if(loadding){
        <Loadding/>
    } else {
        return (
            <AuthContext.Provider value={{singed:!!user, user, singIn, singOut, loadding }}>
                {children}
            </AuthContext.Provider>
        )
    }
}


export const useAuth = () => {
    const ctx = useContext(AuthContext);
    return ctx;
}

export default AuthContext;
