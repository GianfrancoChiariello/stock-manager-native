import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import {addDistribuidor} from '../src/redux/action'
import ModalAddProv from '../components/ModalAddProv'
import ViewProv from '../components/ViewProv'
import React, { useState } from 'react'




export default function AddProveedor() {

    const [modal, setModal] = useState(false)
  

  
    return (
        <View style={{
            backgroundColor: 'rgba(43, 43, 43, 1)',
            width: '100%',
            height: '100%',
        }}>
            

            <View style={{
                margin: 15,
                borderRadius: 20,
                backgroundColor: 'rgba(48, 48, 52, 1)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                

                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: 'rgba(87, 115, 83, 1)',
                    padding: 10,
                    borderRadius: 10,
                }}
                onPress={() => setModal(!modal)}
                >
                    <Text style={{
                        color: 'rgba(255, 255, 255, 1)',
                        fontWeight: '400',
                    }}>
                        {
                            modal ? 'Ver Proveedores' : 'Agregar Proveedor'
                        }
                    </Text>
                </TouchableOpacity>

                
                {
                     modal ? <ModalAddProv /> : <ViewProv/>
                }
            
            
            
            </View>
        
        
        </View>
  )
}