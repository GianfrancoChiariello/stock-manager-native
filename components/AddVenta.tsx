import { View, Text, ScrollView, StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import {useStates} from '../hooks/useStates'
import {useState} from 'react'
import { Chip } from 'react-native-paper';
import { useEffect, useRef } from 'react';
import { totalVentas } from '../src/redux/action';
import { useDispatch } from 'react-redux';
import { getStockComida,addVentas } from '../src/redux/action';
import NewGusto from './NewGusto';

export default function AddVenta() {
  
    const dispatch = useDispatch()

    useEffect(() => {
        getStockComida().then((res : any) => {
          dispatch<any>(res)
        })
      }, [])
  
  const {stock, animales, bolsas, latas, bolsa8kg,bolsa15kg,bolsa10kg,lata400gr,lata290gr,sobre100gr} = useStates()

    const inputRef1 = useRef(null)

    const inputRef2 = useRef(null)

  



  const [cliente, setCliente] = useState<any>("")
  const [metodoPago, setMetodoPago] = useState<any>("")
  const [mascotaVenta, setMascotaVenta] = useState("")
  const [etapaVenta, setEtapaVenta] = useState("")
  const [empaqueVenta, setEmpaqueVenta] = useState("")
  const [pesoVenta, setPesoVenta] = useState("")
  const [peso_kg, setPeso_kg] = useState(Number)
  const [precio_kg, setPrecio_kg] = useState(Number) 
  const [cantidadVenta, setCantidadVenta] = useState(Number)
  const [cantidadVentaUnitaria, setCantidadVentaUnitaria] = useState(Number)
  const [productosVenta, setProductosVenta] = useState([])


  const addVenta = () => {

    if (cliente && mascotaVenta && etapaVenta && empaqueVenta && pesoVenta && productosVenta) {
      addVentas({
        "cliente": cliente,
        "mascota": mascotaVenta,  
        "etapa": etapaVenta,
        "empaque": empaqueVenta,
        "peso": pesoVenta,
        "productos": productosVenta,
        "precio_kg": precio_kg,
        "peso_kg" : peso_kg
      }).then((res : any) => {
        dispatch<any>(res)
      })
    } else {
      alert('Completa los campos')
    }

  }


  const resetProducts = () => {
    setCantidadVenta(0)
    setCantidadVentaUnitaria(0)
  }

  const metodos = [
    'Mercado Pago',
    'Efectivo',
    'Debito',
    'Credito',
    'Envio de dinero'
  ]


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
                "adulto": bolsa15kg?.adulto || [],
                "cachorro": bolsa15kg?.cachorro || [],
            },
            "10kg": {
                "adulto": bolsa10kg?.adulto || [],
                "cachorro": bolsa10kg?.cachorro || [],
            },
            "8kg": {
                "adulto": bolsa8kg?.adulto || [],
                "cachorro": bolsa8kg?.cachorro || [],
            }
        },
        "lata": {
            "290gr": {
                "adulto": lata290gr?.adulto || [],
                "cachorro": lata290gr?.cachorro || [],
            },
            "400gr": {
                "adulto": lata400gr?.adulto || [],
                "cachorro": lata400gr?.cachorro || [],
            },
            "3kg": {
                "adulto": lata400gr?.adulto || [],
                "cachorro": lata400gr?.cachorro || [],
            }
        },
        "sobre": {
            "100gr": {
                "adulto": sobre100gr?.adulto || [],
                "cachorro": sobre100gr?.cachorro || [],
            },
            "90gr": {
                "adulto": [],
                "cachorro": [],
            },
            "80gr": {
                "adulto": [],
                "cachorro": [],
            },
        }
    },
    'gatos': {
        "bolsa": {
            "15kg": {
                "adulto": bolsa15kg?.adulto || [],
                "cachorro": bolsa15kg?.cachorro || [],
            },
            "10kg": {
                "adulto": bolsa10kg?.adulto || [],
                "cachorro": bolsa10kg?.cachorro || [],
            },
            "8kg": {
                "adulto": bolsa8kg?.adulto || [],
                "cachorro": bolsa8kg?.cachorro || [],
            }
        },
        "lata": {
            "1kg": {
                "adulto": latas?.adulto || [],
                "cachorro": latas?.cachorro || [],
            },
            "2kg": {
                "adulto": latas?.adulto || [],
                "cachorro": latas?.cachorro || [],
            },
            "3kg": {
                "adulto": latas?.adulto || [],
                "cachorro": latas?.cachorro || [],
            }
        },
        "sobre": {
            "350gr": {
                "adulto": bolsas?.adulto || [],
                "cachorro": bolsas?.cachorro || [],
            },
            "500gr": {
                "adulto": bolsas?.adulto || [],
                "cachorro": bolsas?.cachorro || [],
            },
            "1kg": {
                "adulto": bolsas?.adulto || [],
                "cachorro": bolsas?.cachorro || [],
            }
        }
    }
}



  console.log("Array de pedidos", productosVenta)

  

    const styles = StyleSheet.create({
        inputs: {
            borderRadius: 10,
        }
        });
  
    return (
    <ScrollView style={{
        width: '100%',
        height: '95%',
        backgroundColor: 'rgba(43, 43, 43, 1)',
    }}>
    <View style={{
        backgroundColor: 'rgba(48, 48, 52, 1)',
        margin: 10,
        paddingVertical: 10,
        borderRadius: 10,
    }}>







            <View>
              <Text>Cliente*:</Text>

                <TextInput
                  style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 40,
                    margin: 5,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Example: email,telefono etc"
                  onChangeText={(text) => {
                    setCliente(text)
                  }}
                  value={cliente}
                />

                <Text>Metodo de pago*:</Text>

                  {
                    metodos && metodos.map((metodo : any, key: any) => (
                        <Chip onPress={() => {
                            setMetodoPago("")
                            setMetodoPago(metodo)
                            }}
                            style={{
                            margin: 5,
                            backgroundColor: metodoPago === metodo ? 'green' : 'gray',
                            width: 200,
                            }}
                            >{metodo}</Chip>
                    ))
                  }

            </View>



            <View style={{
                width: '100%',
                padding: 10,
            }}>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                    <View style={{
                        alignItems: 'center',
                    }}>
                        <Text>
                            Mascota
                        </Text>

                    {
                        animales && animales.map((animal : any, key: any) => (
                        <Chip onPress={() => {
                            setMascotaVenta("")
                            setMascotaVenta(animal.id)
                        }}
                        style={{
                            margin: 5,
                            backgroundColor: mascotaVenta === animal.id ? 'green' : 'gray',
                            width: 80,
                        }}
                        >{animal.id}</Chip>
                        ))
                    }


                    </View>

                    <View style={{
                        alignItems: 'center',
                    }}>
                        <Text>Etapa</Text>

                            <Chip onPress={() => {
                                setEtapaVenta("")
                                setEtapaVenta('adulto')
                            }}
                            style={{
                                margin: 5,
                                backgroundColor: etapaVenta === 'adulto' ? 'green' : 'gray',
                                width: 80,
                            }}
                            >Adulto</Chip>

                            <Chip onPress={() => {
                                setEtapaVenta("")
                                setEtapaVenta('cachorro')
                            }}
                            style={{
                                margin: 5,
                                backgroundColor: etapaVenta === 'cachorro' ? 'green' : 'gray',
                                width: 115,
                            }}
                            >Cachorro</Chip>


                    </View>

                    <View style={{
                        alignItems: 'center',
                    }}>
            <Text>Empaque</Text>

            <Chip onPress={() => {
                    setEmpaqueVenta("")
                    setEmpaqueVenta('bolsa')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: empaqueVenta === 'bolsa' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Bolsa</Chip>

            <Chip onPress={() => {
                    setEmpaqueVenta("")
                    setEmpaqueVenta('lata')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: empaqueVenta === 'lata' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Lata</Chip>
            

                    </View>
                  </View>
         

          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
            <Text>Peso</Text>

            {
              bolsas && Object.keys(bolsas).map((key : any) => (
                <Chip onPress={() => {
                  setPesoVenta("")
                  setPesoVenta(key)
                }}
                style={{
                  margin: 5,
                  backgroundColor: pesoVenta === key ? 'green' : 'gray',
                  width: 80,
                }}
                >{key}</Chip>
              ))
            }

          </View>

          <View style={{
            alignItems: 'center',
          }}>
            <TouchableOpacity onPress={() => {
              setMascotaVenta("")
              setEtapaVenta("")
              setEmpaqueVenta("")
              setPesoVenta("")
            }}>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text>Producto</Text>
            {mascotaVenta && empaqueVenta && pesoVenta && etapaVenta &&
              maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta] ? (

                `${empaqueVenta}${pesoVenta}` &&
                Object.keys(maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta]).map((producto1) => (

                    maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1] && (
                    <View key={producto1}>
                    <Chip
                      onPress={() => {
                        const index = productosVenta.findIndex((item: any) => item.producto === producto1);
                        if (index !== -1) {
                          setProductosVenta(productosVenta.filter((item: any) => item.producto !== producto1));
                        } else {

                          if (cantidadVenta > 0) {
                            setProductosVenta([
                              ...productosVenta,
                              {
                                producto: producto1,
                                cantidad_kgs: cantidadVenta,
                                precio_kgs : maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio_kg,
                                subtotal: maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio_kg * cantidadVenta,
                              },
                            ]);
                            resetProducts()

                          } else {
                            setProductosVenta([
                              ...productosVenta,
                              {
                                producto: producto1,
                                cantidad_unitaria: cantidadVentaUnitaria,
                                precio_kgs : maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio_kg,
                                subtotal: maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio_kg * cantidadVenta,
                              },
                            ]);
                            resetProducts()
                          }

                        }
                      }}
                      style={{
                        margin: 5,
                        backgroundColor: productosVenta.some((item: any) => item.producto === producto1)
                          ? 'green'
                          : 'gray',
                        width: 200,
                      }}>
                      {producto1}
                    </Chip>



                      <View style={{
                        flexDirection: 'column',
                      }}>
                          <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                            <TextInput
                            ref={inputRef1}
                            style={{
                              backgroundColor: 'gray',
                              width: 100,
                              height: 40,
                              margin: 5,
                              borderRadius: 10,
                              paddingHorizontal: 10,
                            }}
                            placeholder="Cantidad"
                            onChangeText={(text) => {
                              setCantidadVenta(parseInt(text));
                            }}
                            value={cantidadVenta as any}
                          />
                            <Text>
                            Kgs
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                            <TextInput
                            ref={inputRef2}
                            style={{
                              backgroundColor: 'gray',
                              width: 100,
                              height: 40,
                              margin: 5,
                              borderRadius: 10,
                              paddingHorizontal: 10,
                            }}
                            placeholder="Cantidad"
                            onChangeText={(text) => {
                              setCantidadVentaUnitaria(parseInt(text));
                            }}
                            value={cantidadVentaUnitaria as any}
                          />
                            <Text>
                            Unitaria
                            </Text>
                        </View>
                        
                    </View>


                  </View>
                  )

                ))
              ) : (
                <View>
                  <Text>Selecciona todos los campos</Text>
                  <Text>

                  </Text>
                </View>
                
              )}
          </View>







            <TouchableOpacity onPress={() => {
              addVenta()
            }}>
              <Text>
                Agregar venta
              </Text>

            </TouchableOpacity>








    </View>

    </View>




    </ScrollView>
  )
}


