import { View, Text,Image,StyleSheet,TouchableOpacity,DrawerLayoutAndroid, StatusBar,ImageBackground, Alert  } from 'react-native'
import React from 'react'
import {
    useHistory,
} from 'react-router-native'
import { IconButton, MD3Colors } from 'react-native-paper';







export default function SideBar({children, title, route, icon} : any) {

    const history = useHistory()

    const drawerRef = React.useRef(null);

    const openDrawer = () => {
        drawerRef.current.openDrawer();
    };
    

    const rutas = [
        {
            name: 'Stock',
            icon: 'unlock',
            route: 'Stock',
            action: null
        },
        {
            name: 'Proveedor',
            icon: 'unlock',
            route: 'Proveedorr',
            action: null
        },
        {
            name: 'Add ventas',
            icon: 'users',
            route: 'Ventas',
            action: null
        },
        {
            name: 'Dashboard',
            icon: 'users',
            route: 'Dashboard',
            action: null
        },
    ]
    
    const style = StyleSheet.create({
        nav: {
            backgroundColor: 'rgba(43, 43, 43, 1)',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            position: 'relative',
        },
        subnav: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: icon ? 'space-between' : 'center',
            alignItems: 'center',
        }, 
        icon: {
            marginRight: 10,
            color: 'gray'
        },
        logoNavbar: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        },
        items: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: 'rgba(43, 43, 43, 1)',
        },
        containerItems: {
            marginTop: 60,
            color: 'white',
            backgroundColor: 'rgba(43, 43, 43, 1)',
    
        },
        textItems: {
            marginLeft: 10,
            fontSize: 15,
            color: 'white',
            fontWeight: '500',
        },
        iconTainer: {
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            opacity: 0.8,
            backgroundColor: 'rgba(43, 43, 43, 1)',
    
        },
        toper: {
            marginTop: StatusBar.currentHeight,
            backgroundColor: 'rgba(43, 43, 43, 1)',
    
        },
        subnaver: {
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(43, 43, 43, 1)',
        },
        icon2: {
            marginLeft: 10,
        }
    })

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={270}
      drawerPosition={'left'}
      renderNavigationView={() => (
        <ImageBackground 
            style={{
                backgroundColor: 'rgba(43, 43, 43, 1)',
                width: '100%',
                height: '100%',
            }}>
            <View>
                

                <View style={style.containerItems}>
                    {
                        rutas.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => {history.push(`/${item.route}`)
                                }} style={style.items}>
                                    <Text style={style.textItems} >{item.name}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

            </View>
        </ImageBackground>
      )}
    >
      
    <View style={style.nav}>
        <View style={style.subnaver}>
            <View style={style.subnav}>
                <TouchableOpacity onPress={openDrawer}>
                    <Text style={{
                        color: '#C0C0C0',
                        fontSize: 20,
                        fontWeight: 'bold',
                        margin: 7
                    }}>{title}</Text>
                </TouchableOpacity>

                {
                    icon ?  <TouchableOpacity onPress={() => {history.push(route)}}>
                    <IconButton
                        icon="plus"
                        iconColor='white'
                        size={28}
                        style={style.icon2}
                    />
                </TouchableOpacity>
                : null
                }
            </View>
        </View>
    </View>

        {children}

    </DrawerLayoutAndroid>
  )
}