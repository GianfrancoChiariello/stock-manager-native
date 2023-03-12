import { View, Text,Linking,ScrollView } from 'react-native'
import { getDistribuidores,deleteDistribuidor,newPedido } from '../src/redux/action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, MD3Colors } from 'react-native-paper';
import {useStates} from '../hooks/useStates'



export default function ViewProv() {
  
    const dispatch = useDispatch()
    
    const distribuidores = useSelector((state : any) => state.distribuidores)
    const pedidos = useSelector((state : any) => state.pedido)


    useEffect(() => {
        getDistribuidores().then((res : any) => {
            dispatch<any>(res)
        })
    },[])

    
    const deleteDis = (id : any) => {
        deleteDistribuidor(id).then((res : any) => {
            dispatch<any>(res)
        })
    }


    const sendMessage = (tel: any, name :any) => {
        Linking.openURL(`https://api.whatsapp.com/send?phone=54${tel}&text=Hola! ${name}`)
    }

  
  
    return (
        <ScrollView style={{
            width: '100%',
            height: '100%'
        }}>
        <View style={{
            width: '100%',
            height: '100%'
        }}>
           
            {
                distribuidores && distribuidores.map((distribuidor : any) => {
                    return (
                        <View style={{
                            backgroundColor: 'rgba(140, 140, 140, 1)',
                            margin: 10,
                            borderRadius: 10,
                            padding: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}> 

                            <View>
                                <Text>Nombre:  {distribuidor.nombre}</Text>
                                <Text>Correo:  {distribuidor.correo}</Text>
                                <Text>Direccion:  {distribuidor.direccion}</Text>
                                <Text>Tel:  {distribuidor.telefono}</Text>
                                <Text>Zona:  {distribuidor.zona}</Text>
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>

                                <Text  style={{
                                    color: distribuidor.status ? 'green' : 'red',
                                    letterSpacing: 1,
                                    fontWeight: '400',
                                    backgroundColor: 'rgba(237, 237, 237, 1)',
                                    padding: 5,
                                    borderRadius: 5,
                                }}>{distribuidor.status ? 'Enabled' : 'Disable'}</Text>

                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    <IconButton
                                        icon="delete"
                                        size={20}
                                        onPress={() => {
                                                deleteDis(distribuidor.id)
                                                alert('Eliminado')
                                        }}
                                    />

                                    <IconButton
                                        icon="whatsapp"
                                        size={20}
                                        onPress={() => sendMessage(distribuidor.telefono, distribuidor.nombre)}
                                    />
                                </View>


                            </View>
                        </View>
                    )
                })
            }


        </View>
        </ScrollView>
    )
}