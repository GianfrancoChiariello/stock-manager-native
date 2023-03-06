import {
  STOCK,
} from "./const";


// estados iniciales
const initialState = {
  general: {},
  proveedores: {},
  stock: {},
  accesorios: {},
  bolsas: {},
  animales: [],
  ventas : [],


  //Total ventas
  totalVentasHoy : 0,
  totalVentasMes : 0,
  totalVentasAno : 0,

  //Total venta monto
  totalVentasHoyMonto : 0,
  totalVentasMesMonto : 0,
  totalVentasAnoMonto : 0,

  //Total ventas por medio de pago
  totalVentasMp : 0,
  totalVentasEfectivo : 0,
  totalVentasDebito : 0,
  totalVentasCredito : 0,
  totalVentasEnvio : 0,

};



export const userReducer = (state = initialState, action: any) => {

switch (action.type) {


  case STOCK:
    return {
      ...state,
      animales: action.animales,
      stock: action.stock,

      bolsas: action.bolsas,
      latas: action.latas,

      bolsa15kg: action.bolsa15kg,
      bolsa10kg: action.bolsa10kg,
      bolsa8kg: action.bolsa8kg,
  };

  case 'TOTAL_VENTAS':
    return {
      ...state,

      //Total ventas
      totalVentasHoy: action.totalVentasHoy,
      totalVentasMes: action.totalVentasMes,
      totalVentasAno: action.totalVentasAno,

      //Total venta monto
      totalVentasHoyMonto: action.totalVentasHoyMonto,
      totalVentasMesMonto: action.totalVentasMesMonto,
      totalVentasAnoMonto: action.totalVentasAnoMonto,

      //Total ventas por medio de pago
      totalVentasMp: action.totalVentasMp,
      totalVentasEfectivo: action.totalVentasEfectivo,
      totalVentasDebito: action.totalVentasDebito,
      totalVentasCredito: action.totalVentasCredito,
      totalVentasEnvio: action.totalVentasEnvio,
    };
  
    case 'UPDATE_STOCK':
      return {
        ...state,
        messageUpdate : action.payload,
      };


    default:
      return state;
  }
};

