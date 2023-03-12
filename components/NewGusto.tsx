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
  
      const {        
        stock,
        animales,
        perros_bolsas,
        perros_latas,
        perros_sobres,
        perros_bolsa22kg,
        perros_bolsa15kg,
        perros_bolsa10kg,
        perros_bolsa8kg,
        perros_bolsa6kg,
        perros_bolsa3kg,
        perros_bolsa2kg,
        perros_lata400gr,
        perros_lata340gr,
        perros_lata290gr,
        perros_sobre100gr,
        perros_sobre85gr,
        gatos_bolsas,
        gatos_latas,
        gatos_sobres,
        gatos_bolsa1kg,
        gatos_bolsa3kg,
        gatos_lata340gr,
        gatos_sobre85gr,
        gatos_empaques,
        perros_empaques,
    } = useStates()
    

    
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
    if (newGusto === "" || newCantidad === "" || newPrecio === "" || newNombre === "") {
      alert("Todos los campos son obligatorios")
    } else {
      let obj1 = {
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

      let obj2 = {
        newGusto,
        newCantidad,
        newPrecio,
        newNombre,
        animal,
        empaque,
        pesoEmpaque,
        etapaEmpaque
      }
      
    if (empaque === "bolsa") {
        setAddArray([...addArray, obj1])
      } else {
        setAddArray([...addArray, obj2])
    }

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
                "22kg": {
                    "adulto": perros_bolsa22kg?.adulto || [],
                    "cachorro": perros_bolsa22kg?.cachorro || [],
                },
                "15kg": {
                    "adulto": perros_bolsa15kg?.adulto || [],
                    "cachorro": perros_bolsa15kg?.cachorro || [],
                },
                "10kg": {
                    "adulto": perros_bolsa10kg?.adulto || [],
                    "cachorro": perros_bolsa10kg?.cachorro || [],
                },
                "8kg": {
                    "adulto": perros_bolsa8kg?.adulto || [],
                    "cachorro": perros_bolsa8kg?.cachorro || [],
                },
                "6kg": {
                    "adulto":  perros_bolsa6kg?.adulto || [],
                    "cachorro":  perros_bolsa6kg?.cachorro || [],
                },
                "3kg": {
                    "adulto": perros_bolsa3kg?.adulto || [],
                    "cachorro": perros_bolsa3kg?.cachorro || [],
                },
                "2kg": {
                    "adulto": perros_bolsa2kg?.adulto || [],
                    "cachorro": perros_bolsa2kg?.cachorro || [],
                },
            },
            "lata": {
                "290gr": {
                    "adulto": perros_lata290gr?.adulto || [],
                    "cachorro": perros_lata290gr?.cachorro || [],
                },
                "340gr": {
                    "adulto": perros_lata340gr?.adulto || [],
                    "cachorro": perros_lata340gr?.cachorro || [],
                },
                "400gr": {
                    "adulto": perros_lata400gr?.adulto || [],
                    "cachorro": perros_lata400gr?.cachorro || [],
                }
            },
            "sobre": {
                "100gr": {
                    "adulto": perros_sobre100gr?.adulto || [],
                    "cachorro": perros_sobre100gr?.cachorro || [],
                },
                "90gr": {
                    "adulto": [],
                    "cachorro": [],
                },
                "80gr": {
                    "adulto": [],
                    "cachorro": [],
                },
                "85gr": {
                    "adulto": perros_sobre85gr?.adulto || [],
                    "cachorro": perros_sobre85gr?.cachorro || [],
                }
            }
        },
        'gatos': {
            "bolsa": {
                "1kg": {
                    "adulto": gatos_bolsa1kg?.adulto || [],
                    "cachorro": gatos_bolsa1kg?.cachorro || [],
                },
                "3kg": {
                    "adulto": gatos_bolsa3kg?.adulto || [],
                    "cachorro": gatos_bolsa3kg?.cachorro || [],
                }
            },
            "lata": {
                "340gr": {
                    "adulto": gatos_lata340gr?.adulto || [],
                    "cachorro": gatos_lata340gr?.cachorro || [],
                }
            },
            "sobre": {
                "85gr": {
                    "adulto": gatos_sobre85gr?.adulto || [],
                    "cachorro": gatos_sobre85gr?.cachorro || [],
                },

            }
        }
    }
  
  
    const chipsAnimal = ['perros', 'gatos']
    const chipsEmpaque = ['bolsa', 'lata', 'sobre']
    const chipEtapa = ['adulto', 'cachorro']
       

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

                  {
                    empaque === 'bolsa' && (
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
                    )
                  }


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
                                flexDirection: 'column',
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
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                }}>
                                   
                                   
                                   
                                   {
                                        animal && animal === 'perros' && perros_bolsas && Object.keys(perros_bolsas).map((chip) => {
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


{
                                        animal && animal === 'gatos' && gatos_bolsas && Object.keys(gatos_bolsas).map((chip) => {
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
                                        animal && animal === 'perros' && perros_latas && Object.keys(perros_latas).map((chip) => {
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

                                    {
                                        animal && animal === 'gatos' && gatos_latas && Object.keys(gatos_latas).map((chip) => {
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
                                        animal && animal === 'perros' && perros_sobres && Object.keys(perros_sobres).map((chip) => {
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

                                    {
                                        animal && animal === 'gatos' && gatos_sobres && Object.keys(gatos_sobres).map((chip) => {
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


