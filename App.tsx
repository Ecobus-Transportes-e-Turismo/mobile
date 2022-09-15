import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { VehicleProvider } from './src/context/VehiclesContext'
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <VehicleProvider>
          <Routes/>
        </VehicleProvider>
      </AuthProvider>
    </NavigationContainer>
    
  );
}
