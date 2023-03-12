import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useStates} from '../hooks/useStates'
import {useState} from 'react'
import { Chip } from 'react-native-paper';
import { useEffect } from 'react';
import { totalVentas,getStockComida } from '../src/redux/action';
import { useDispatch } from 'react-redux';

export default function Stock() {
  
    const dispatch = useDispatch()
  
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
    
    const [empaque, setEmpaque] = useState('')
    const [pesoEmpaque, setPesoEmpaque] = useState('')  
    const [etapaEmpaque, setEtapaEmpaque] = useState('')
    const [animal, setAnimal] = useState('')


    useEffect(() => {
        getStockComida().then((res :any) => {
            dispatch<any>(res)
        })

    }, [empaque,pesoEmpaque,etapaEmpaque,animal])
    



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
   
    const chipsPesoBolsa = ['15kg', '10kg', '8kg']
    const chipsPesoLata = ['290gr', '400gr', '3kg']
    const chipsPesoSobre = ['100gr', '90gr', '80gr']

    



  
    return (
    <ScrollView style={{
        width: '100%',
        height: '95%',
        backgroundColor: 'rgba(43, 43, 43, 1)',
    }}>
      <Text style={{
        alignSelf: 'center',
        fontSize: 22,
        color: 'rgba(192, 192, 192, 0.81)',
        fontWeight: '500',
      }}>Filtrado</Text>
    
    <View style={{
        backgroundColor: 'rgba(48, 48, 52, 1)',
        margin: 10,
        paddingVertical: 10,
        borderRadius: 10,
    }}>

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
                animales && animales.map((chip : any) => {
                    return (
                        <Chip
                            key={chip?.id}
                            style={{
                                margin: 5,
                                backgroundColor: chip?.id === animal ? 'green' : 'gray',
                                width: 100,
                                borderRadius: 10,
                            }}
                            onPress={() => {
                                setAnimal(chip?.id)
                            }}
                        >
                            {chip?.id}
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
                animal && animal === 'perros' ? (
                    perros_empaques && Object.keys(perros_empaques).map((chip) => {
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
                ) : (
                    gatos_empaques && Object.keys(gatos_empaques).map((chip) => {
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
                )
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
                        
                        
                        
                        
                        <TouchableOpacity onPress={() => {
                            setAnimal("")
                            setEmpaque("")
                            setEtapaEmpaque("")
                            setPesoEmpaque("")
                        }}>
                            <Text>
                                Delete filters
                            </Text>
                        </TouchableOpacity>
            </View>
            )
        }

    </View>


    {
        stock && (
            <View style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            }}>         
                <Text style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    color: 'rgba(192, 192, 192, 0.81)',
                }}>Resultados</Text>

                    { empaque && pesoEmpaque && etapaEmpaque && animal &&
                        maqueta[animal][empaque][pesoEmpaque][etapaEmpaque] && Object.keys(maqueta[animal][empaque][pesoEmpaque][etapaEmpaque]).map((key) => {
                            return (
                                <View style={styles.container}>
                                    
                                    {
                                        Object.keys(maqueta[animal][empaque][pesoEmpaque][etapaEmpaque]).length > 0  ? (
                                            
                                                empaque !== 'lata' && empaque !== 'sobre' ? (
                                                    <View>
                                                        <Text style={styles.subtitle}>
                                                        Nombre: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.nombre}
                                                    </Text>
                                                    <Text style={styles.subtitle}>
                                                        Precio por unidad: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.precio}
                                                    </Text>
                                                    <Text style={styles.subtitle}>
                                                        Precio por kg: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.precio_kg}
                                                    </Text>
                                                    <Text style={styles.subtitle}>
                                                        Stock: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.cantidad}
                                                    </Text>
                                                    <Text style={styles.subtitle}>
                                                        Stock en Kgs: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.total_kg}
                                                    </Text>
                                            </View>
                                                ) : (
                                                    <View>
        
                                                        <Text style={styles.subtitle}>
                                                            Nombre: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.nombre}
                                                        </Text>
                                                        <Text style={styles.subtitle}>
                                                            Precio por unidad: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.precio}
                                                        </Text>
                                                        <Text style={styles.subtitle}>
                                                            kg totales: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.total_kg}
                                                        </Text>
                                                        <Text style={styles.subtitle}>
                                                            Stock: {maqueta[animal][empaque][pesoEmpaque][etapaEmpaque][key]?.cantidad}
                                                        </Text>
        
                                                    </View>
                                                )
                                            
                                        ) : (
                                            <View>
                                                <Text>No hay stock</Text>
                                            </View>
                                        )
                                    }
                                    
                                </View>
                            )
                        })
                    }

                    { empaque && pesoEmpaque && etapaEmpaque && animal &&
                        Object.keys(maqueta[animal][empaque][pesoEmpaque][etapaEmpaque]).length === 0 && (
                            <View>
                                <Text>No hay stock</Text>
                            </View>
                        )
                    }
            
            
            
            </View>
        )
    }

    </ScrollView>
  )
}


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
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
    },
    });