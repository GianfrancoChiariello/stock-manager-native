import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import {useStates} from '../hooks/useStates'
import {useState} from 'react'
import { Chip } from 'react-native-paper';
import { useEffect } from 'react';
import { totalVentas } from '../src/redux/action';
import { useDispatch } from 'react-redux';

export default function Stock() {
  
    const dispatch = useDispatch()
  
  const {bolsas, latas, bolsa8kg,bolsa15kg,bolsa10kg} = useStates()
    
    const [empaque, setEmpaque] = useState('')
    const [pesoEmpaque, setPesoEmpaque] = useState('')  
    const [etapaEmpaque, setEtapaEmpaque] = useState('')
    const [animal, setAnimal] = useState('')

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

    </View>


    {
        bolsas && (
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
                            )
                        })
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