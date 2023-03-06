import { View,Text,StatusBar,StyleSheet, TouchableOpacity, ScrollView, TextInput,RefreshControl} from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import {useState} from 'react'
import {useSelector} from 'react-redux'
import {getStockComida,updateStockComida,addNewGusto,addVentas} from '../src/redux/action'
import {useDispatch} from 'react-redux'
import {
  useHistory,
} from "react-router-native";
import { Chip } from 'react-native-paper';
import {useStates} from '../hooks/useStates'


export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()

  const {stock, animales, bolsas, latas, bolsa8kg,bolsa15kg} = useStates()
  

  const [mascota , setMascota] = useState<any>("")
  const [empaquetado , setEmpaquetado] = useState<any>("")
  const [peso , setPeso] = useState<any>("")
  const [etapa , setEtapa] = useState<any>("")
  const [producto, setProducto] = useState<any>("")
  const [campo, setCampo] = useState<any>("")
  const [valor, setValor] = useState<any>(Number)

  const [array, setArray] = useState<any>([])

  //New gusto

  const [newGusto, setNewGusto] = useState<any>("")
  const [newCantidad, setNewCantidad] = useState<any>(Number)
  const [newPrecio, setNewPrecio] = useState<any>(Number)
  const [newPrecioKg, setNewPrecioKg] = useState<any>(Number)
  const [newNombre, setNewNombre] = useState<any>("")
  const [mascota1 , setMascota1] = useState<any>("")
  const [empaquetado1 , setEmpaquetado1] = useState<any>("")
  const [categoriaPeso, setCategoriaPeso] = useState<any>("")
  const [etapa1, setEtapa1] = useState<any>("")
  const [addArray, setAddArray] = useState<any>([])

  //Nueva venta

  const [cliente, setCliente] = useState<any>("")
  
  

  const [mascotaVenta, setMascotaVenta] = useState("")
  const [etapaVenta, setEtapaVenta] = useState("")
  const [empaqueVenta, setEmpaqueVenta] = useState("")
  const [pesoVenta, setPesoVenta] = useState("")
  const [peso_kg, setPeso_kg] = useState(Number)
  const [precio_kg, setPrecio_kg] = useState(Number) 
  const [cantidadVenta, setCantidadVenta] = useState(Number)
  const [productosVenta, setProductosVenta] = useState([])



  const addVenta = () => {

    addVentas(      {
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
  }

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
        mascota1,
        empaquetado1,
        categoriaPeso,
        etapa1
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
        setMascota1("")
        setEmpaquetado1("")
        setCategoriaPeso("")
        setEtapa1("")
      })
      
      
      console.log(addArray)
    }


  }

  
  const campos = [
    "cantidad",
    "precio",
    "precio_kg",
    "total_kg",
  ]

  const update = () => {

    if (mascota === "" || empaquetado === "" || peso === "" || etapa === "" || producto === "" || campo === "" || valor === "") {
      alert("Todos los campos son obligatorios")
      return
    } else {
      let obj = {
        mascota,
        empaquetado,
        peso,
        etapa,
        producto,
        campo,
        valor,
      }
      setArray([...array, obj])
      
      console.log(array)

      updateStockComida(array).then((res : any) => {
        dispatch<any>(res)
        setArray([])
        setMascota("")
        setEmpaquetado("")
        setPeso("")
        setEtapa("")
        setProducto("")
        setCampo("")
        setValor("")
      })


    }
  }




  const [bolsasKeys, setBolsasKeys] = useState<any>([])

  const [bolsas15kg, setBolsas15kg] = useState<any>([])

  const [bolsas8kg, setBolsas8kg] = useState<any>([])



  type Recycle = {
    [key: string]: {
      [key: string]: {
        [key : string]: {
          [key : string ]: string[];
        };
      };
    };
  };
  

  const recycle: Recycle = {
    perros: {
      bolsa: {
        "8kg": {
          cachorro: bolsa8kg?.cachorro,
          adulto: bolsa8kg?.adulto,
        },
        "15kg": {
          cachorro: bolsa15kg?.cachorro,
          adulto: bolsa15kg?.adulto,
        },
        "10kg" : {
          cachorro: [],
          adulto: [],
        }
      },
    },
    gatos: {
      bolsa: {
        "8kg": {
          cachorro: [],
          adulto: [],
        },
        "15kg": {
          cachorro: [],
          adulto: [],
        },
        "10kg" : {
          cachorro: [],
          adulto: [],
        }
      },
    },
  };




  useEffect(() => {

    getStockComida().then((res : any) => {
      dispatch<any>(res)
      setBolsasKeys(Object.keys(bolsas))
      setBolsas15kg(Object.keys(bolsa15kg))
      setBolsas8kg(Object.keys(bolsa8kg))
    })

  }, [])


  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    
    getStockComida().then((res : any) => {
      dispatch<any>(res)
      setBolsasKeys(Object.keys(bolsas))
      setBolsas15kg(Object.keys(bolsa15kg))
      setBolsas8kg(Object.keys(bolsa8kg))
    })

    setTimeout(() => {
      setRefreshing(false)
    } , 1500)
  }


  return (  
    <ScrollView 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
     style={{
      paddingHorizontal: 20,
    }}> 


    <Text style={styles.text}>Dashboard</Text>
  

      <View style={{
      alignItems: 'flex-start',
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
      }}>
          <View style={{
            marginTop: 20,
            width: '100%',
            height: 1000,
            alignItems: 'center',
          }}>
          <Text style={{
            marginBottom: 60,
          }}>
            Actualizar Stock
          </Text>


          <View style={styles.texty, {width: 300}}>
            <Text>Mascota</Text>

              {
                animales && animales.map((animal : any, key: any) => (
                  <Chip onPress={() => {
                    setMascota("")
                    setMascota(animal.id)
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: mascota === animal.id ? 'green' : 'gray',
                    width: 80,
                  }}
                  >{animal.id}</Chip>
                ))
              }


          </View>

          <View style={styles.texty, {width: 300}}>
            <Text>Etapa</Text>

                  <Chip onPress={() => {
                    setEtapa("")
                    setEtapa('adulto')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: etapa === 'adulto' ? 'green' : 'gray',
                    width: 80,
                  }}
                  >Adulto</Chip>

                  <Chip onPress={() => {
                    setEtapa("")
                    setEtapa('cachorro')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: etapa === 'cachorro' ? 'green' : 'gray',
                    width: 115,
                  }}
                  >Cachorro</Chip>


          </View>
         
          <View style={styles.texty, {width: 300}}>
            <Text>Empaque</Text>

            <Chip onPress={() => {
                    setEmpaquetado("")
                    setEmpaquetado('bolsa')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: empaquetado === 'bolsa' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Bolsa</Chip>

            <Chip onPress={() => {
                    setEmpaquetado("")
                    setEmpaquetado('lata')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: empaquetado === 'lata' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Lata</Chip>
            

          </View>
          
          <View style={styles.texty, {width: 300}}>
            <Text>Peso</Text>

            {
              bolsas && Object.keys(bolsas).map((key : any) => (
                <Chip onPress={() => {
                  setPeso("")
                  setPeso(key)
                }}
                style={{
                  margin: 5,
                  backgroundColor: peso === key ? 'green' : 'gray',
                  width: 80,
                }}
                >{key}</Chip>
              ))
            }

          </View>
          
          <View style={styles.texty}>
            <Text>Producto</Text>

            {
              mascota === 'perros' && (

                peso === '15kg' && (

                  etapa === 'adulto' && (

                    bolsa15kg && Object.keys(bolsa15kg.adulto).map((producto1 : any) => (
                      <Chip onPress={() => {
                        setProducto("")
                        setProducto(producto1)
                      }}
                      style={{
                        margin: 5,
                        backgroundColor: producto === producto1 ? 'green' : 'gray',
                        width: 200,
                      }}
                      >{producto1}</Chip>
                    ))

                  )

                )

              )
            }
          </View>


          <View style={styles.texty, {width: 300}}>
            <Text>Campo a actualizar</Text>
            <Text>Nota: si el valor se quiere decrementar de debe poner un signo "-"</Text>

            {
              campos && campos.map((campo1 : any, key: any) => (
                <Chip onPress={() => {
                  setCampo("")
                  setCampo(campo1)
                }}
                style={{
                  margin: 5,
                  backgroundColor: campo === campo1 ? 'green' : 'gray',
                  width: 200,
                }}
                >{campo1}</Chip>
              ))
            }
          </View>


          

          <View style={styles.texty, {width: 300}}>
            <Text>Nuevo valor</Text>

            <TextInput 
              style={{
                backgroundColor: 'gray',
                width: 200,
                height: 40,
                margin: 5,
              }}
              onChangeText={(text) => {
                setValor(parseInt(text))
              }}
              value={valor}
            />

          </View>
          
          
          
          
          <TouchableOpacity
            style={{
                backgroundColor: 'green',
                width: 100,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}
          onPress={() => {
            update()
          }}>
            
            <Text>Actualizar</Text>
          
          </TouchableOpacity>
          
          
          
          
          
        </View>
          
          <View style={{
            marginTop: 20,
            width: '100%',
            marginBottom: 100,
          }}>

            <Text style={styles.text}>Agregar gustos nuevos</Text>


            <View style={styles.texty, {width: 300}}>
              <Text>Gusto*:</Text>

                <TextInput 
                  style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 40,
                    margin: 5,
                  }}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewGusto(text)
                  }}
                  value={newGusto}
                />
            </View>

            <View style={styles.texty, {width: 300}}>
              <Text>Cantidad*:</Text>

                <TextInput 
                  style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 40,
                    margin: 5,
                  }}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewCantidad(text)
                  }}
                  value={newCantidad}
                />
            </View>

            <View style={styles.texty, {width: 300}}>
              <Text>Precio*:</Text>

                <TextInput 
                  style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 40,
                    margin: 5,
                  }}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewPrecio(text)
                  }}
                  value={newPrecio}
                />
            </View>

            <View style={styles.texty, {width: 300}}>
              <Text>Nombre*:</Text>

                <TextInput 
                  style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 40,
                    margin: 5,
                  }}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewNombre(text)
                  }}
                  value={newNombre}
                />
            </View>

            <View style={styles.texty, {width: 300}}>
              <Text>Precio/Kg*:</Text>

                <TextInput 
                  style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 40,
                    margin: 5,
                  }}
                  placeholder="Example: dog_chow_pollo_arroz.."
                  onChangeText={(text) => {
                    setNewPrecioKg(text)
                  }}
                  value={newPrecioKg}
                />
            </View>


            //Aca el otro bloque nuevo

            <View style={styles.texty, {width: 300}}>
              <Text>Mascota*:</Text>

              <Chip onPress={() => {
                    setMascota1("")
                    setMascota1('perros')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: mascota1 === 'perros' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Perros</Chip>

            <Chip onPress={() => {
                    setMascota1("")
                    setMascota1('gatos')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: mascota1 === 'gatos' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Gatos</Chip>
                
            </View>

            
            <View style={styles.texty, {width: 300}}>
              <Text>Empaque*:</Text>

              <Chip onPress={() => {
                    setEmpaquetado1("")
                    setEmpaquetado1('bolsa')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: empaquetado1 === 'bolsa' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Bolsa</Chip>

            <Chip onPress={() => {
                    setEmpaquetado1("")
                    setEmpaquetado1('lata')
                  }}
                  style={{
                    margin: 5,
                    backgroundColor: empaquetado1 === 'lata' ? 'green' : 'gray',
                    width: 80,
                  }}
            >Lata</Chip>
                  
            </View>

            <View style={styles.texty, {width: 300}}>
            <Text>Peso</Text>

            {
              bolsas && Object.keys(bolsas).map((key : any) => (
                <Chip onPress={() => {
                  setCategoriaPeso("")
                  setCategoriaPeso(key)
                }}
                style={{
                  margin: 5,
                  backgroundColor: categoriaPeso === key ? 'green' : 'gray',
                  width: 80,
                }}
                >{key}</Chip>
              ))
            }

            </View>

            <View style={styles.texty, {width: 300}}>
              <Text>Etapa</Text>

                    <Chip onPress={() => {
                      setEtapa1("")
                      setEtapa1('adulto')
                    }}
                    style={{
                      margin: 5,
                      backgroundColor: etapa1 === 'adulto' ? 'green' : 'gray',
                      width: 80,
                    }}
                    >Adulto</Chip>

                    <Chip onPress={() => {
                      setEtapa1("")
                      setEtapa1('cachorro')
                    }}
                    style={{
                      margin: 5,
                      backgroundColor: etapa1 === 'cachorro' ? 'green' : 'gray',
                      width: 115,
                    }}
                    >Cachorro</Chip>


            </View>


            <TouchableOpacity
              style={{
                backgroundColor: 'green',
                width: 100,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                margin: 5,
              }}
              onPress={() => {
                addGusto()
            }}>

              <Text>Agregar</Text>

            </TouchableOpacity>

            
          </View>
          

































          
          <View style={{
            marginTop: 20,
            width: '100%',
            marginBottom: 100,
          }}>
            <Text style={styles.text}>Nueva venta</Text>


            <View style={styles.texty, {width: 300}}>
              <Text>Cliente*:</Text>

                <TextInput
                  style={{
                    backgroundColor: 'gray',
                    width: 230,
                    height: 40,
                    margin: 5,
                  }}
                  placeholder="Example: email,telefono etc"
                  onChangeText={(text) => {
                    setCliente(text)
                  }}
                  value={cliente}
                />
            </View>

            <View style={styles.texty, {width: 300}}>
            <View style={styles.texty, {width: 300}}>
            <Text>Mascota</Text>

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

          <View style={styles.texty, {width: 300}}>
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
         
          <View style={styles.texty, {width: 300}}>
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
          
          <View style={styles.texty, {width: 300}}>
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

          <View style={styles.texty}>
            <Text>Producto</Text>





            {mascotaVenta && empaqueVenta && pesoVenta && etapaVenta &&
              recycle[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta] ? (

                `${empaqueVenta}${pesoVenta}` &&
                Object.keys(recycle[mascotaVenta][empaqueVenta][pesoVenta][etapaVenta]).map((producto1) => (

                  bolsa15kg.adulto[producto1] && (
                    <View key={producto1}>
                    <Chip
                      onPress={() => {
                        const index = productosVenta.findIndex((item: any) => item.producto === producto1);
                        if (index !== -1) {
                          setProductosVenta(productosVenta.filter((item: any) => item.producto !== producto1));
                        } else {
                          setProductosVenta([
                            ...productosVenta,
                            {
                              producto: producto1,
                              cantidad_kgs: cantidadVenta,
                              precio_kgs : bolsa15kg.adulto[producto1].precio_kg,
                              subtotal: bolsa15kg.adulto[producto1].precio_kg * cantidadVenta,
                            },
                          ]);
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

                    <TextInput
                      style={{
                        backgroundColor: 'gray',
                        width: 230,
                        height: 40,
                        margin: 5,
                      }}
                      placeholder="Cantidad"
                      onChangeText={(text) => {
                        setCantidadVenta(parseInt(text));
                      }}
                      value={cantidadVenta as any}
                    />
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






































      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginVertical: 40,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
  texty: {
    marginVertical: 20,
  }
})


