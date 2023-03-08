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
        
        bolsas : stock[1]?.bolsa,
        latas : stock[1]?.lata,


        bolsa15kg: stock[1]?.bolsa['15kg'],
        bolsa10kg: stock[1]?.bolsa['10kg'],
        bolsa8kg: stock[1]?.bolsa['8kg'],

        lata290gr: stock[1].lata['290gr'],
        lata400gr: stock[1].lata['400gr'],
        lata800gr: stock[1].lata['400gr'],

        sobre100gr: stock[1].sobre['100gr']


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
      perrosRef.update({
        [ `${empaque}.${pesoEmpaque}.${etapaEmpaque}.${newGusto}` ]: {
          cantidad: parseInt(newCantidad),
          nombre: newNombre,
          precio: parseInt(newPrecio),
          precio_kg: parseInt(newPrecioKg),
          total_kg: parseInt(newCantidad) * parseInt(pesoNums),
        }
      }).then(() => {
        console.log("New gusto added successfully!");
      });

    
    } catch (e: any) {
      console.log(e);
    }
  };
};


export const addVentas = async (props: any) => {


    const {cliente,mascota,etapa,empaque,peso,productos,precio_kg,peso_kg,} = props;

    console.log("Productos",productos)
    
    return async function (dispatch: any) {
  
      try {







/*           const docRef = await addDoc(collection(db, "ventas"), {
            cliente: cliente || "Sin cliente",
            fecha: serverTimestamp(),
            productos: productos,


            total: productos.reduce((acc: any, item: any) => {
              return acc + item.subtotal;
            }, 0),
          });
 */

          //Update stocks

          productos.forEach((item: any) => {
/*             const perrosRef = db.collection('productos').doc(mascota);
            perrosRef.update({
              [ `${ empaque}.${peso}.${etapa}.${item.producto}.${'total_kg'}`]: firebase.firestore.FieldValue.increment(-item.cantidad_kgs),
            }).then(() => {
              console.log("Document successfully updated!");
            });
          } */

          const perrosRef = db.collection('productos').doc(mascota);

          if (item.cantidad_unitaria) {
            const pesot = parseInt(peso.replace(/[a-zA-Z]/g, ""))
            
            perrosRef.update({
              [ `${ empaque}.${peso}.${etapa}.${item.producto}.${'cantidad'}`]: firebase.firestore.FieldValue.increment(-item.cantidad_unitaria),
            })
            perrosRef.update({
              [ `${ empaque}.${peso}.${etapa}.${item.producto}.${'total_kg'}`]: firebase.firestore.FieldValue.increment(-pesot),
            })
          } else {
            perrosRef.update({
              [ `${ empaque}.${peso}.${etapa}.${item.producto}.${'total_kg'}`]: firebase.firestore.FieldValue.increment(-item.cantidad_kgs),
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


