import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/axios";
import { Vehicles } from "../types";


type VehicleContextType = {
    vehicles:Vehicles[] | null,
    placas?:Placas[] | null,
    findOne(_id:string):Promise<Vehicles>
}

type Placas = {
    label:string,
    value:string
}


type Props = {
    children:React.ReactNode
}

const VehicleContext = createContext<VehicleContextType >({} as VehicleContextType);

export const VehicleProvider:React.FC<Props> = ({children}) => {

    const [ vehicles, setVehicles ] = useState<Vehicles[] | null>(null);
    const [ placas, setPlacas ] = useState<Placas[] | null>(null);
    const [ loadding, setLoadding ] = useState(true);

    useEffect(() => {
        api.get('/Vehicles').then((item)=> {
            setVehicles(item.data.vehicles)
            setLoadding(false);
        }).catch((err)=>{
            setVehicles(null);
            console.error(err)
        });

        vehicles?.map(item=> {
            placas?.push({
                label:item.placa,
                value:item._id
            });
        })
    },[]);

    const findOne = async (_id:string) => {
        const { data } = await api.patch(`/Vehicles/${_id}`);
        return data.vehicles
    }

    return (
        <VehicleContext.Provider value={{placas, vehicles, findOne}} >
            { children }
        </VehicleContext.Provider>
    )
}

export const useVehicles = () => {
    const ctx = useContext(VehicleContext);
    return ctx;
}