import { View, Text,TextInput,StyleSheet, TouchableOpacity, ScrollView  } from 'react-native'
import {addDistribuidor} from '../src/redux/action'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'



export default function ModalAddProv() {

    const dispatch = useDispatch()
  
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState(Number)
    const [zone, setZone] = useState('')
    const [category, setCategory] = useState('')


    const addProd = () => {

        if (name === '' || email === '' || address === '' || phone === 0 || zone === '' || category === '') {
            alert('Todos los campos son obligatorios')
        } else {
            addDistribuidor({name, email, address, phone, zone, category}).then((res : any) => {
                dispatch<any>(res)
            } )
            setName('')
            setEmail('')
            setAddress('')
            setPhone(0)
            setZone('')
            setCategory('')
        }
    }


    const style = StyleSheet.create({
        view1: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        view2: {
            width: '80%',
            marginTop: 20,
        },
        text1: {
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '400',
            alignSelf: 'flex-start',
        },
        textInput1: {
            borderRadius: 10,
            padding: 8,
            marginBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'rgba(255, 255, 255, 1)',
        },
    })
    
    
    return (
    <ScrollView style={{
        width: '100%',
        height: '100%',
    }}>
        <View style={style.view1}>
            
            
        <View style={style.view2}>
            <Text style={style.text1}>Nombre</Text>
            <TextInput 
                onChangeText={(e) => setName(e)}
                style={style.textInput1} />
        </View>

        <View style={style.view2}>
            <Text style={style.text1}>Correo</Text>
            <TextInput 
                onChangeText={(e) => setEmail(e)}
                style={style.textInput1} />
        </View>

        <View style={style.view2}>
            <Text style={style.text1}>Direccion</Text>
            <TextInput 
                onChangeText={(e) => setAddress(e)}
                style={style.textInput1} />
        </View>

        <View style={style.view2}>
            <Text style={style.text1}>Telefono</Text>
            <TextInput 
                onChangeText={(e) => setPhone(Number(e))}
                textContentType='telephoneNumber'
                style={style.textInput1} />
        </View>

        <View style={style.view2}>
            <Text style={style.text1}>Zona</Text>
            <TextInput 
                onChangeText={(e) => setZone(e)}
                style={style.textInput1} />
        </View>

        <View style={style.view2}>
            <Text style={style.text1}>Categoria</Text>
            <TextInput 
                onChangeText={(e) => setCategory(e)}
                style={style.textInput1} />
        </View>
        
        
        <TouchableOpacity style={{
            backgroundColor: 'rgba(87, 115, 83, 1)',
            padding: 10,
            borderRadius: 10,
            paddingHorizontal: 20,
        }}
        onPress={addProd}
        >
            <Text style={{
                color: 'rgba(255, 255, 255, 1)',
            }}>Añadir</Text>
        </TouchableOpacity>
        
        
        
        </View>
    </ScrollView>
  )
}