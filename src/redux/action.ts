import {
  //Ramas principales

  STOCK,


} from "./const";


import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  increment,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  endBefore,
  startAt,
  endAt,
  getDoc,
  deleteDoc,
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDITobjCpSsnbXMVlgsIBH9ExfmahnLfvI",
  authDomain: "animalitos-56bab.firebaseapp.com",
  projectId: "animalitos-56bab",
  storageBucket: "animalitos-56bab.appspot.com",
  messagingSenderId: "816452730526",
  appId: "1:816452730526:web:4293e20b4251ec82a4458f",
  measurementId: "G-S5VYXBYKEC"
};


import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);


/* export const getStockComida = async () => {
  return async function (dispatch: any) {


    try {
      
      const querySnapshot = await getDocs(collection(db, "productos"));

      const stock = querySnapshot.docs.map((doc) => doc.data());


      
      return dispatch({
        type: STOCK,

        animales: querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
          };
        }),

        //General
        stock: querySnapshot.docs.map((doc) => doc.data()),

        //Empaques
        bolsas : stock[1].bolsa,
        latas : stock[1].lata,

        //Pesos de cada empaque
        bolsa15kg: stock[1].bolsa['15kg'],
        bolsa8kg: stock[1].bolsa['8kg'],
        
        

      });
    } catch (e: any) {
      console.log(e);
    }
  };
}; */


export const getStockComida = async () => {
  return async function (dispatch: any) {
    try {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const stock = querySnapshot.docs.map((doc) => doc.data());

/*       const lowStock = stock.filter((item: any) => {

        return {
          perros: {
            bolsa: {
              "15kg": item.perros.bolsa['15kg'].total_kg < 30,
              "10kg": item.perros.bolsa['10kg'].total_kg < 30,
              "8kg": item.perros.bolsa['8kg'].total_kg < 30,
            },
          }
        }
      }) */


      return dispatch({
        type: STOCK,
        
        animales: querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
          };
        }),
        stock: stock,
        
        
        
        
        
        //Perros
        
        perros_bolsas : stock[1]?.bolsa,
        perros_latas : stock[1]?.lata,
        perros_sobres : stock[1]?.sobre,

        perros_empaques: stock[1],

        perros_bolsa22kg: stock[1]?.bolsa['22kg'],
        perros_bolsa15kg: stock[1]?.bolsa['15kg'],
        perros_bolsa10kg: stock[1]?.bolsa['10kg'],
        perros_bolsa8kg: stock[1]?.bolsa['8kg'],
        perros_bolsa6kg: stock[1]?.bolsa['6kg'],
        perros_bolsa3kg: stock[1]?.bolsa['3kg'],
        perros_bolsa2kg: stock[1]?.bolsa['2kg'],

        perros_lata400gr: stock[1].lata['400gr'],
        perros_lata340gr: stock[1].lata['340gr'],
        perros_lata290gr: stock[1].lata['290gr'],

        perros_sobre100gr: stock[1].sobre['100gr'],
        perros_sobre85gr: stock[1].sobre['85gr'],

        //Gatos

        gatos_bolsas : stock[0]?.bolsa,
        gatos_latas : stock[0]?.lata,
        gatos_sobres : stock[0]?.sobre,

        gatos_empaques: stock[0],

        gatos_bolsa1kg: stock[0]?.bolsa['1kg'],
        gatos_bolsa3kg: stock[0]?.bolsa['3kg'],

        gatos_lata340gr: stock[0].lata['340gr'],

        gatos_sobre85gr: stock[0].sobre['85gr'],




      });
    } catch (e: any) {
      console.log(e);
    }
  };
};


export const updateStockComida = async (props: any) => {

  const { animal, empaque, pesoEmpaque, etapaEmpaque, producto, campo, valor } = props;

  console.log("OJOTA", props)

  console.log(
    animal, empaque, pesoEmpaque, etapaEmpaque, producto, campo, valor
  )
  
  return async function (dispatch: any) {

    try {
      
    
      const perrosRef = db.collection('productos').doc(animal);
      perrosRef.update({
       [ `${ empaque}.${pesoEmpaque}.${etapaEmpaque}.${producto}.${campo}`]: firebase.firestore.FieldValue.increment(parseInt(valor)),
      }).then(() => {
        console.log("Document successfully updated!");
      });


      dispatch({
        type: "UPDATE_STOCK",
        payload: "Producto actualizado correctamente"
      })

    
    } catch (e: any) {
      dispatch({
        type: "UPDATE_STOCK",
        payload: "Producto actualizado correctamente"
      })  
    }
  };
};

export const addNewGusto = async (props: any) => {

  const { newGusto, newCantidad, newPrecio, newPrecioKg, newNombre, animal,empaque,pesoEmpaque,etapaEmpaque} = props[0];
    
  const pesoNums = pesoEmpaque.replace(/[a-zA-Z]/g, "");

  return async function (dispatch: any) {

    try {
    
      const perrosRef = db.collection('productos').doc(animal);
      
      
      if (newPrecioKg) {
        perrosRef.update({
          [ `${empaque}.${pesoEmpaque}.${etapaEmpaque}.${newGusto}` ]: {
            cantidad: parseInt(newCantidad),
            nombre: newNombre,
            precio: parseInt(newPrecio),
            precio_kg: parseInt(newPrecioKg),
            total_kg: parseInt(newCantidad) * parseInt(pesoNums),
          }
      } ).then(() => {
        console.log("New gusto added successfully!");
      });
      } else {
        perrosRef.update({
          [ `${empaque}.${pesoEmpaque}.${etapaEmpaque}.${newGusto}` ]: {
            cantidad: parseInt(newCantidad),
            nombre: newNombre,
            precio: parseInt(newPrecio),
            total_kg: parseInt(newCantidad) * parseInt(pesoNums),
          }
      } ).then(() => {
        console.log("New gusto added successfully!");
      })
      }

    
    } catch (e: any) {
      console.log(e);
    }
  };
};


export const addVentas = async (props: any) => {


    const {cliente,mascota,etapa,empaque,peso,productos,pago} = props;

    console.log("pago",pago)
    
    return async function (dispatch: any) {
  
      try {


          const docRef = await addDoc(collection(db, "ventas"), {
            cliente: cliente || "Sin cliente",
            fecha: serverTimestamp(),
            pago: pago,
            productos: productos,

            total: productos.reduce((acc: any, item: any) => {
              return acc + item.subtotal;
            }, 0),
          });


          //Update stocks

          productos.forEach((item: any) => {


            const pesot = parseInt(item.peso.replace(/[a-zA-Z]/g, ""))
            const perrosRef = db.collection('productos').doc(item.mascota);

          if (item.cantidad_unitaria) {
            const pesoTotalDescount = (pesot * item.cantidad_unitaria) / 1000

          console.log(item.mascota,item.empaque,item.peso,item.etapa,item.producto, 'cantidad', item.cantidad_unitaria)
          console.log(item.mascota,item.empaque,item.peso,item.etapa,item.producto, 'total_kg', pesot)

            
            perrosRef.update({
              [ `${item.empaque}.${item.peso}.${item.etapa}.${item.producto}.${'cantidad'}`]: firebase.firestore.FieldValue.increment(-item.cantidad_unitaria),
            })
            perrosRef.update({
              [ `${item.empaque}.${item.peso}.${item.etapa}.${item.producto}.${'total_kg'}`]: firebase.firestore.FieldValue.increment(   -parseFloat(pesoTotalDescount.toFixed(2))),
            })
          } else {            
            perrosRef.update({
              [ `${item.empaque}.${item.peso}.${item.etapa}.${item.producto}.${'total_kg'}`]: firebase.firestore.FieldValue.increment(- ( pesot * item.cantidad_kgs )),
            })
          }

        }
        )

  
      
      } catch (e: any) {
        console.log(e);
      }
    };
  };

  export const totalVentas = async () => {
    return async function (dispatch: any) {
      try {
        const ventasRef = collection(db, "ventas");
        const today = new Date();
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const startOfYear = new Date(today.getFullYear(), 0, 1);
        
        // Obtener las ventas de hoy
        const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
        const startOfTomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 0, 0, 0);
        const querySnapshotToday = await getDocs(query(ventasRef, where("fecha", ">=", startOfToday), where("fecha", "<", startOfTomorrow)));
        const ventasToday = querySnapshotToday.docs.map((doc) => doc.data());
        const totalToday = ventasToday.reduce((acc, venta) => acc + venta.total, 0);
        
        // Obtener las ventas del mes actual
        const querySnapshotMonth = await getDocs(query(ventasRef, where("fecha", ">=", startOfMonth)));
        const ventasMonth = querySnapshotMonth.docs.map((doc) => doc.data());
        const totalMonth = ventasMonth.reduce((acc, venta) => acc + venta.total, 0);
        
        // Obtener las ventas del año actual
        const querySnapshotYear = await getDocs(query(ventasRef, where("fecha", ">=", startOfYear)));
        const ventasYear = querySnapshotYear.docs.map((doc) => doc.data());
        const totalYear = ventasYear.reduce((acc, venta) => acc + venta.total, 0);

        
        //Obtener ventas por medios de pago

        const querySnapshot = await getDocs(collection(db, "ventas"));
        const ventas = querySnapshot.docs.map((doc) => doc.data());
  
        // Filtrar las ventas por el medio de pago deseado
        const ventasMp = ventas.filter((venta) => venta.pago === "Mercado Pago");
        const ventasEfectivo = ventas.filter((venta) => venta.pago === "Efectivo");
        const ventaDebito = ventas.filter((venta) => venta.pago === "Debito");
        const ventaCredito = ventas.filter((venta) => venta.pago === "Credito");
        const ventaEnvio = ventas.filter((venta) => venta.pago === "Envio de dinero");
  

  
        return dispatch({
          type: 'TOTAL_VENTAS',
          
          totalVentasHoy: ventasToday.length,
          totalVentasMes: ventasMonth.length,
          totalVentasAno: ventasYear.length,
          
          totalVentasHoyMonto: totalToday,
          totalVentasMesMonto: totalMonth,
          totalVentasAnoMonto: totalYear,

          totalVentasMp: ventasMp.length,
          totalVentasEfectivo: ventasEfectivo.length,
          totalVentasDebito: ventaDebito.length,
          totalVentasCredito: ventaCredito.length,
          totalVentasEnvio: ventaEnvio.length,
        });
  
      } catch (e: any) {
        console.log(e);
      }
    };
  };


export const addDistribuidor = async (props: any) => {

  const {name, email, address, phone, zone, status, category} = props;
  
  
  return async function (dispatch: any) {
    try {
      const docRef = await addDoc(collection(db, "proveedores"), {
        categoria: category || "Sin categoria",
        correo: email || "Sin correo",
        direccion: address || "Sin direccion",
        nombre: name || "Sin nombre",
        status: status || true,
        telefono: phone || "Sin telefono",
        zona: zone || "Sin zona",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e: any) {
      console.log(e);
    }
  };
};

export const getDistribuidores = async () => {
  return async function (dispatch: any) {
    try {
      
      const querySnapshot = await getDocs(collection(db, "proveedores"));
      const distribuidores = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      
      
      return dispatch({
        type: 'GET_DISTRIBUIDORES',
        payload: distribuidores,
      });
    } catch (e: any) {
      console.log(e);
    }
  };
};

export const deleteDistribuidor = async (id: any) => {
  return async function (dispatch: any) {
    try {
      await deleteDoc(doc(db, "proveedores", id));
    
      const data2 = await getDistribuidores();
      dispatch(data2);
    
    } catch (e: any) {
      console.log(e);
    }
  };
};

export const newPedido = async (props: any) => {
  return async function (dispatch: any) {
    try {
      
      return dispatch({
        type: 'NEW_PEDIDO',
        payload: props,
      });

    } catch (e: any) {
      console.log(e);
    }
  };
};