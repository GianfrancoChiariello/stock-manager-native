import { View, Text, ScrollView, StyleSheet,TouchableOpacity,TextInput,RefreshControl } from 'react-native'
import React from 'react'
import {useStates} from '../hooks/useStates'
import {useState} from 'react'
import { Chip } from 'react-native-paper';
import { useEffect } from 'react';
import { totalVentas } from '../src/redux/action';
import { useDispatch } from 'react-redux';
import { getStockComida,updateStockComida } from '../src/redux/action';
import NewGusto from './NewGusto';
import { useSelector } from 'react-redux';

export default function Stock() {
  
    const dispatch = useDispatch()

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getStockComida().then((res : any) => {
            dispatch<any>(res)
            setTimeout(() => {
                setRefreshing(false);
            }, 1000);
        })
    }, []);

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

  const [estado, setEstado] = useState('Actualizar')
    
    const [empaque, setEmpaque] = useState('')
    const [pesoEmpaque, setPesoEmpaque] = useState('')  
    const [etapaEmpaque, setEtapaEmpaque] = useState('')
    const [animal, setAnimal] = useState('Perros')
    const [producto, setProducto] = useState('')
    const [valor, setValor] = useState(0)
    const [campo, setCampo] = useState('')

  const [array, setArray] = useState<any>([])



    const update = () => {


        if (animal === "" || empaque === "" || pesoEmpaque === "" || etapaEmpaque === "" || producto === "" || campo === "" || valor === 0) {
          alert("Todos los campos son obligatorios")
          return
        } else {
            console.log("hola")
          let obj = {
            animal,
            empaque,
            pesoEmpaque,
            etapaEmpaque,
            producto,
            campo,
            valor,
          }          
          

          

          updateStockComida(obj).then((res : any) => {
            dispatch<any>(res)
            setAnimal("")
            setEmpaque("")
            setPesoEmpaque("")
            setEtapaEmpaque("")
            setProducto("")
            setCampo("")
            setValor(0)
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
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
        },
        });
  
    return (
    <ScrollView 
    refreshControl={
        <RefreshControl
            refreshing={refreshing} 
            onRefresh={onRefresh}
        /> 
    }
    style={{
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
            width: '100%',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <TouchableOpacity onPress={() => {
                setEstado('Actualizar')
            }}>
                <Text style={{
                    color: estado === 'Actualizar' ? 'white' : 'gray',
                    fontSize: 18,
                    marginRight: 20,
                }}>Actualizar</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
                setEstado('Nuevo')
            }}>
                <Text style={{
                    color: estado === 'Nuevo' ? 'white' : 'gray',
                    fontSize: 18,
                    marginRight: 20,
                }}>Nuevo</Text>
            </TouchableOpacity>
        </View>

        {
            estado === 'Actualizar' && (
                <View>
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

                    {
                        bolsas && (
                            <View 
                            style={{
                                width: '100%',
                            }}>         
                                <Text style={{
                                    alignSelf: 'center',
                                    fontSize: 20,
                                    color: 'rgba(192, 192, 192, 0.81)',
                                }}>Resultados</Text>

                                    { empaque && pesoEmpaque && etapaEmpaque && animal &&
                                        maqueta[animal][empaque][pesoEmpaque][etapaEmpaque] && Object.keys(maqueta[animal][empaque][pesoEmpaque][etapaEmpaque]).map((key) => {
                                            return (
                                                <View
                                                key={key}
                                                style={{
                                                    width: '95%',
                                                }}>
                                                <TouchableOpacity onPress={() => {
                                                    setProducto(key)
                                                }}
                                                >
                                                    <View style={{
                                                        backgroundColor: producto === key ? 'green' : 'rgba(140, 140, 140, 0.77)',
                                                        alignItems: 'flex-start',
                                                        justifyContent: 'center',
                                                        marginVertical: 10,
                                                        marginHorizontal: 5,
                                                        borderRadius: 10,
                                                        padding: 10,                                                                               
                                                    }}>
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
                                                </TouchableOpacity>
                                                </View>
                                            )
                                        })
                                    }
                            
                            
                            
                            </View>
                        )
                    }

                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            color: 'rgba(192, 192, 192, 0.81)',
                        }}>Campo a actualizar</Text>
                        <Text style={{
                            color: 'rgba(192, 192, 192, 0.81)',
                        }}>Nota: si el valor se quiere decrementar de debe poner un signo "-"</Text>

                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}>
                        {
                                campos && campos.map((campo1 : any, key: any) => (
                                    <Chip 
                                    key={key}
                                    onPress={() => {
                                    setCampo("")
                                    setCampo(campo1)
                                    }}
                                    style={{
                                    margin: 5,
                                    backgroundColor: campo === campo1 ? 'green' : 'gray',
                                    width: 100,
                                    }}
                                    >{campo1}</Chip>
                                ))
                            }
                        </View>
                    </View>

                    
                    <View>
                        <Text style={{
                            color: 'white',
                            margin: 5,
                        }}>Nuevo valor</Text>

                        <TextInput 
                        style={{
                            backgroundColor: 'gray',
                            width: 200,
                            height: 40,
                            margin: 5,
                        }}
                        placeholder="Nuevo valor"
                        onChangeText={(text) => {
                            setValor(parseInt(text))
                        }}
                        value={valor as any}
                        />

                    </View>

                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        marginVertical: 10,
                    }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'green',
                            width: 100,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 5,
                            borderRadius: 10,
                        }}
                    onPress={() => {
                        update()

                        setTimeout(() => {
                            alert("Producto actualizado correctamente")
                        }, 1000)
                    }}>
                        
                        <Text>Actualizar</Text>
                    
                    </TouchableOpacity>
                    </View>


                </View>
            )
        }

        {
            estado === 'Nuevo' && <NewGusto />
        }

    </View>




    </ScrollView>
  )
}


