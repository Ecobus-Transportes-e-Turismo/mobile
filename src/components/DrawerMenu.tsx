import { Text, View, Image, StyleSheet } from 'react-native';
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button'
import { DrawerStyle as styles } from '../styles'

const DrawerMenu = (props:any) => {
    const { singOut, user } = useAuth();;
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.content}>
                     <Image 
                        source={require('../../assets/iconEcobus.jpg')} 
                        style={styles.avatar} 
                        resizeMode='contain' 
                        resizeMethod='scale'
                    />
                     <View style={styles.colum}>
                         <View style={styles.line}>
                            {/* <FontAwesome5 name='user-circle' size={16} color='#000'/> */}
                            <Text style={styles.name}>{user?.name}</Text>
                         </View>
                         <View style={styles.lineCenter}>
                            <FontAwesome5 name='briefcase' sixe={16} color='#000'/>
                            <Text style={styles.office}>{user?.office}</Text>
                         </View>
                     </View>
                </View>
                <DrawerItemList {...props}/>
                
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <Button text='Sair' onPress={singOut}/>
            </View>
        </View>
    );
}

export default DrawerMenu;
