import { useAuth } from '../context/AuthContext';

import AuthRoutes from './auth.routes';

import AdminRoutes from './admin.routes';
import DriveRoutes from './drives.routes';


const Routes:React.FC = () => {
    const { singed, user } = useAuth();
    return (
        singed ? user?.office === 'Administrador' ? <AdminRoutes/> : <DriveRoutes/> : <AuthRoutes /> 
    )
}

export default Routes;