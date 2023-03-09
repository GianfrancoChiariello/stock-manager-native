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

  console.log(productosVenta)
  console.log(mascotaVenta)

  const addVenta = () => {

    if (cliente && mascotaVenta && etapaVenta && empaqueVenta && pesoVenta && productosVenta) {
      addVentas({
        "cliente": cliente,
        "productos": productosVenta,
        "pago": metodoPago,
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


                    {
                      stock && Object.keys(stock[1]).map((item: any) => {
                        return (
                          <Chip onPress={() => {
                            setEmpaqueVenta("")
                            setEmpaqueVenta(item)
                          }}
                          style={{
                            margin: 5,
                            backgroundColor: empaqueVenta === item ? 'green' : 'gray',
                            width: 80,
                          }}
                          >{item}</Chip>
                        )
                      })
                    }
            

                    </View>
                  </View>
         

          
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>


{
            empaqueVenta && (
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 15,
                }}>
                <Text>
                    Peso:
                </Text>
            
            
            {
                empaqueVenta === 'bolsa' ? (
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>


                    {
                        mascotaVenta && mascotaVenta === 'perros' && perros_bolsas && Object.keys(perros_bolsas).map((chip) => {
                            return (
                                <Chip
                                key={chip}
                                style={{
                                    margin: 5,
                                    backgroundColor: chip === pesoVenta ? 'green' : 'gray',
                                    width: 100,
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    setPesoVenta(chip)
                                }}
                            >
                                {chip}
                            </Chip>
                            )
                        })
                    }

                    {
                        mascotaVenta && mascotaVenta === 'gatos' && gatos_bolsas && Object.keys(gatos_bolsas).map((chip) => {
                            return (
                                <Chip
                                key={chip}
                                style={{
                                    margin: 5,
                                    backgroundColor: chip === pesoVenta ? 'green' : 'gray',
                                    width: 100,
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    setPesoVenta(chip)
                                }}
                            >
                                {chip}
                            </Chip>
                            )
                        })
                    }


                    </View>
                ) : empaqueVenta === 'lata' ? (
                    <View  style={{
                        flexDirection: 'row',
                    }}>


                    {
                        mascotaVenta && mascotaVenta === 'perros' && perros_latas && Object.keys(perros_latas).map((chip) => {
                            return (
                                <Chip
                                key={chip}
                                style={{
                                    margin: 5,
                                    backgroundColor: chip === pesoVenta ? 'green' : 'gray',
                                    width: 100,
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    setPesoVenta(chip)
                                }}
                            >
                                {chip}
                            </Chip>
                            )
                        })
                    }

                    {
                        mascotaVenta && mascotaVenta === 'gatos' && gatos_latas && Object.keys(gatos_latas).map((chip) => {
                            return (
                                <Chip
                                key={chip}
                                style={{
                                    margin: 5,
                                    backgroundColor: chip === pesoVenta ? 'green' : 'gray',
                                    width: 100,
                                    borderRadius: 10,
                                }}
                                onPress={() => {
                                    setPesoVenta(chip)
                                }}
                            >
                                {chip}
                            </Chip>
                            )
                        })
                    }


                    </View>
                ) : empaqueVenta === 'sobre' ? (
                    <View style={{
                        flexDirection: 'row',
                    }}>

                        {
                            mascotaVenta && mascotaVenta === 'perros' && perros_sobres && Object.keys(perros_sobres).map((chip) => {
                                return (
                                    <Chip
                                    key={chip}
                                    style={{
                                        margin: 5,
                                        backgroundColor: chip === pesoVenta ? 'green' : 'gray',
                                        width: 100,
                                        borderRadius: 10,
                                    }}
                                    onPress={() => {
                                        setPesoVenta(chip)
                                    }}
                                >
                                    {chip}
                                </Chip>
                                )
                            })
                        }

                        {
                            mascotaVenta && mascotaVenta === 'gatos' && gatos_sobres && Object.keys(gatos_sobres).map((chip) => {
                                return (
                                    <Chip
                                    key={chip}
                                    style={{
                                        margin: 5,
                                        backgroundColor: chip === pesoVenta ? 'green' : 'gray',
                                        width: 100,
                                        borderRadius: 10,
                                    }}
                                    onPress={() => {
                                        setPesoVenta(chip)
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
                            setMascotaVenta("")
                            setEmpaqueVenta("")
                            setEtapaVenta("")
                            setPesoVenta("")
                        }}
                        style={{
                          margin: 10,
                          backgroundColor: 'gray',
                          borderRadius: 10,
                          padding: 5,  
                        }}
                        >
                            <Text>
                                Delete filters
                            </Text>
                        </TouchableOpacity>
            </View>
            )
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

                          if (empaqueVenta === 'bolsa') {
                            if (cantidadVenta > 0) {
                              setProductosVenta([
                                ...productosVenta,
                                {
                                  mascota: mascotaVenta,
                                  empaque: empaqueVenta,
                                  peso: pesoVenta,
                                  etapa: etapaVenta,
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
                                  mascota: mascotaVenta,
                                  empaque: empaqueVenta,
                                  peso: pesoVenta,
                                  etapa: etapaVenta,
                                  producto: producto1,
                                  cantidad_unitaria: cantidadVentaUnitaria,
                                  precio_kgs : maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio_kg,
                                  subtotal: maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio_kg * cantidadVenta,
                                },
                              ]);
                              resetProducts()
                            }
                          } else {
                            if (cantidadVenta > 0) {
                              setProductosVenta([
                                ...productosVenta,
                                {
                                  mascota: mascotaVenta,
                                  empaque: empaqueVenta,
                                  peso: pesoVenta,
                                  etapa: etapaVenta,
                                  producto: producto1,
                                  cantidad_kgs: cantidadVenta,
                                  precio: maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio,
                                  subtotal: maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio * cantidadVenta,
                                },
                              ]);
                              resetProducts()
  
                            } else {
                              setProductosVenta([
                                ...productosVenta,
                                {
                                  mascota: mascotaVenta,
                                  empaque: empaqueVenta,
                                  peso: pesoVenta,
                                  etapa: etapaVenta,
                                  producto: producto1,
                                  cantidad_unitaria: cantidadVentaUnitaria,
                                  precio: maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio,
                                  subtotal: maqueta[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta][producto1].precio * cantidadVenta,
                                },
                              ]);
                              resetProducts()
                            }
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
                         
                         
                         
                      {
                        empaqueVenta && empaqueVenta === 'bolsa' ? (
                          <View>
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
                        ) : (
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
                        )
                      }
                        
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


