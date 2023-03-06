import { View, Text, ScrollView, StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import {useStates} from '../hooks/useStates'
import {useState} from 'react'
import { Chip } from 'react-native-paper';
import { useEffect } from 'react';
import { totalVentas } from '../src/redux/action';
import { useDispatch } from 'react-redux';
import { getStockComida,updateStockComida,addNewGusto } from '../src/redux/action';

export default function Stock() {
  
    const dispatch = useDispatch()

    useEffect(() => {
        getStockComida().then((res : any) => {
          dispatch<any>(res)
        })
      }, [])
    
      const campos = [
        "cantidad",
        "precio",
        "precio_kg",
        "total_kg",
      ]
  
  const {bolsas, latas, bolsa8kg,bolsa15kg,bolsa10kg} = useStates()

    
    const [newGusto, setNewGusto] = useState<any>("")
    const [newCantidad, setNewCantidad] = useState<any>(Number)
    const [newPrecio, setNewPrecio] = useState<any>(Number)
    const [newPrecioKg, setNewPrecioKg] = useState<any>(Number)
    const [newNombre, setNewNombre] = useState<any>("")
    const [empaque, setEmpaque] = useState('')
    const [pesoEmpaque, setPesoEmpaque] = useState('')  
    const [etapaEmpaque, setEtapaEmpaque] = useState('')
    const [animal, setAnimal] = useState('')
    const [campo, setCampo] = useState('')
     const [addArray, setAddArray] = useState<any>([])


  const addGusto = () => {
    if (newGusto === "" || newCantidad === "" || newPrecio === "" || newPrecioKg === "" || newNombre === "") {
      alert("Todos los campos son obligatorios")
    } else {
      let obj = {
        newGusto,
        newCantidad,
        newPrecio,
        newPrecioKg,
        newNombre,
        animal,
        empaque,
        pesoEmpaque,
        etapaEmpaque
      }
      setAddArray([...addArray, obj])

      addNewGusto(addArray).then((res : any) => {
        dispatch<any>(res)
        setAddArray([])
        setNewGusto("")
        setNewCantidad("")
        setNewPrecio("")
        setNewPrecioKg("")
        setNewNombre("")
        setAnimal("")
        setEmpaque("")
        setPesoEmpaque("")
        setEtapaEmpaque("")
      })
    }


  }



    type maquetaTY = {
        [key: string]: {
            [key: string]: {
                [key: string]: {
                    [key: string]: string[]
                }
            }
        }
    }
  
    const maqueta : maquetaTY = {
        'perros': {
            "bolsa": {
                "15kg": {
                    "adulto": bolsa15kg?.adulto,
                    "cachorro": bolsa15kg?.cachorro,
                },
                "10kg": {
                    "adulto": bolsa10kg?.adulto,
                    "cachorro": bolsa10kg?.cachorro,
                },
                "8kg": {
                    "adulto": bolsa8kg?.adulto,
                    "cachorro": bolsa8kg?.cachorro,
                }
            },
            "lata": {
                "1kg": {
                    "adulto": latas?.adulto,
                    "cachorro": latas?.cachorro,
                },
                "2kg": {
                    "adulto": latas?.adulto,
                    "cachorro": latas?.cachorro,
                },
                "3kg": {
                    "adulto": latas?.adulto,
                    "cachorro": latas?.cachorro,
                }
            },
            "sobre": {
                "350gr": {
                    "adulto": bolsas?.adulto,
                    "cachorro": bolsas?.cachorro,
                },
                "500gr": {
                    "adulto": bolsas?.adulto,
                    "cachorro": bolsas?.cachorro,
                },
                "1kg": {
                    "adulto": bolsas?.adulto,
                    "cachorro": bolsas?.cachorro,
                }
            }
        },
        'gatos': {
            "bolsa": {
                "15kg": {
                    "adulto": bolsa15kg?.adulto,
                    "cachorro": bolsa15kg?.cachorro,
                },
                "10kg": {
                    "adulto": bolsa10kg?.adulto,
                    "cachorro": bolsa10kg?.cachorro,
                },
                "8kg": {
                    "adulto": bolsa8kg?.adulto,
                    "cachorro": bolsa8kg?.cachorro,
                }
            },
            "lata": {
                "1kg": {
                    "adulto": latas?.adulto,
                    "cachorro": latas?.cachorro,
                },
                "2kg": {
                    "adulto": latas?.adulto,
                    "cachorro": latas?.cachorro,
                },
                "3kg": {
                    "adulto": latas?.adulto,
                    "cachorro": latas?.cachorro,
                }
            },
            "sobre": {
                "350gr": {
                    "adulto": bolsas?.adulto,
                    "cachorro": bolsas?.cachorro,
                },
                "500gr": {
                    "adulto": bolsas?.adulto,
                    "cachorro": bolsas?.cachorro,
                },
                "1kg": {
                    "adulto": bolsas?.adulto,
                    "cachorro": bolsas?.cachorro,
                }
            }
        }
    }
  
  
    const chipsAnimal = ['perros', 'gatos']
    const chipsEmpaque = ['bolsa', 'lata', 'sobre']
    const chipEtapa = ['adulto', 'cachorro']
   
    const chipsPesoBolsa = ['15kg', '10kg', '8kg']
    const chipsPesoLata = ['1kg', '2kg', '3kg']
    const chipsPesoSobre = ['350gr', '500gr', '1kg']

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'rgba(140, 140, 140, 0.77)',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginVertical: 10,
            marginHorizontal: 5,
            width: '90%',
            borderRadius: 10,
            padding: 10,
        },
        titles:{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgba(243, 243, 243, 1)',
        },
        subtitle:{
            fontSize: 13,
            fontWeight: '400',
            color: 'white',
            marginLeft: 5,
        },
        inputs: {
            backgroundColor: 'gray',
            width: 230,
            height: 35,
            margin: 5,
            borderRadius: 5,
        }
        });
  
    return (
        <View>









        <View>
              <Text style={styles.subtitle}>Gusto*:</Text>

                <TextInput 
                  style={styles.inputs}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewGusto(text)
                  }}
                  value={newGusto}
                />
            </View>

            <View>
              <Text style={styles.subtitle}>Cantidad*:</Text>

                <TextInput 
                  style={styles.inputs}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewCantidad(text)
                  }}
                  value={newCantidad}
                />
            </View>

            <View>
              <Text style={styles.subtitle}>Precio*:</Text>

                <TextInput 
                  style={styles.inputs}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewPrecio(text)
                  }}
                  value={newPrecio}
                />
            </View>

            <View>
              <Text style={styles.subtitle}>Nombre*:</Text>

                <TextInput 
                  style={styles.inputs}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewNombre(text)
                  }}
                  value={newNombre}
                />
            </View>

            <View>
              <Text style={styles.subtitle}>Precio/Kg*:</Text>

                <TextInput 
                  style={styles.inputs}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewPrecioKg(text)
                  }}
                  value={newPrecioKg}
                />
            </View>


            <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 15,
                    }}>
                        <View>
                            <Text style={styles.titles}>
                                Elegir animal:
                            </Text>
                        {
                            chipsAnimal.map((chip) => {
                                return (
                                    <Chip
                                        key={chip}
                                        style={{
                                            margin: 5,
                                            backgroundColor: chip === animal ? 'green' : 'gray',
                                            width: 100,
                                            borderRadius: 10,
                                        }}
                                        onPress={() => {
                                            setAnimal(chip)
                                        }}
                                    >
                                        {chip}
                                    </Chip>
                                )
                            })
                        }
                        </View>

                        <View>
                            <Text style={styles.titles}>
                                Elegir empaque:
                            </Text>
                        {
                            chipsEmpaque.map((chip) => {
                                return (
                                    <Chip
                                        key={chip}
                                        style={{
                                            margin: 5,
                                            backgroundColor: chip === empaque ? 'green' : 'gray',
                                            width: 100,
                                            borderRadius: 10,
                                        }}
                                        onPress={() => {
                                            setEmpaque(chip)
                                        }}
                                    >
                                        {chip}
                                    </Chip>
                                )
                            })
                        }
                        </View>

                        <View>
                            <Text style={styles.titles}>
                                Elegir etapa:
                            </Text>
                        {
                            chipEtapa.map((chip) => {
                                return (
                                    <Chip
                                        key={chip}
                                        style={{
                                            margin: 5,
                                            backgroundColor: chip === etapaEmpaque ? 'green' : 'gray',
                                            width: 100,
                                            borderRadius: 10,
                                        }}
                                        onPress={() => {
                                            setEtapaEmpaque(chip)
                                        }}
                                    >
                                        {chip}
                                    </Chip>
                                )
                            })
                        }
                        </View>
                    </View>

                    {
                        empaque && (
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                marginTop: 15,
                            }}>
                            <Text style={styles.titles}>
                                Peso:
                            </Text>
                        {
                            empaque === 'bolsa' ? (
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    {
                                        chipsPesoBolsa.map((chip) => {
                                            return (
                                                <Chip
                                                    key={chip}
                                                    style={{
                                                        margin: 5,
                                                        backgroundColor: chip === pesoEmpaque ? 'green' : 'gray',
                                                        width: 100,
                                                        borderRadius: 10,
                                                    }}
                                                    onPress={() => {
                                                        setPesoEmpaque(chip)
                                                    }}
                                                >
                                                    {chip}
                                                </Chip>
                                            )
                                        }) 
                                    }
                                </View>
                            ) : empaque === 'lata' ? (
                                <View  style={{
                                    flexDirection: 'row',
                                }}>
                                    {
                                        chipsPesoLata.map((chip) => {
                                            return (
                                                <Chip
                                                    key={chip}
                                                    style={{
                                                        margin: 5,
                                                        backgroundColor: chip === pesoEmpaque ? 'green' : 'gray',
                                                        width: 100,
                                                        borderRadius: 10,
                                                    }}
                                                    onPress={() => {
                                                        setPesoEmpaque(chip)
                                                    }}
                                                >
                                                    {chip}
                                                </Chip>
                                            )
                                        })
                                    }
                                </View>
                            ) : empaque === 'sobre' ? (
                                <View style={{
                                    flexDirection: 'row',
                                }}>
                                    {
                                        chipsPesoSobre.map((chip) => {
                                            return (
                                                <Chip
                                                    key={chip}
                                                    style={{
                                                        margin: 5,
                                                        backgroundColor: chip === pesoEmpaque ? 'green' : 'gray',
                                                        width: 100,
                                                        borderRadius: 10,
                                                    }}
                                                    onPress={() => {
                                                        setPesoEmpaque(chip)
                                                    }}
                                                >
                                                    {chip}
                                                </Chip>
                                            )
                                        })  
                                    }
                                </View>
                            ) : null
                        } 
                        </View>
                        )
                    }



                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        marginTop: 15,
                    }}>
                        <TouchableOpacity onPress={() => addGusto()}>
                            <Text style={{
                                backgroundColor: 'green',
                                color: 'white',
                                padding: 10,
                                paddingHorizontal: 20,
                                borderRadius: 10,
                                fontSize: 15,
                            }}>Agregar</Text>
                        </TouchableOpacity>
                    </View>








        </View>
    )
}


