import {
  STOCK,
} from "./const";


// estados iniciales
const initialState = {
  general: {},
  proveedores: {},
  stock: {},
  accesorios: {},
  bolsas: [],
  animales: [],
  ventas : [],
  distribuidores: [],


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

  console.log("ACTION",action)

  
switch (action.type) {


  case STOCK:
    return {
      ...state,
      animales: action.animales,
      stock: action.stock,

      perros_empaques : action.perros_empaques,
      gatos_empaques : action.gatos_empaques,

      perros_bolsas : action.perros_bolsas,
      perros_latas  : action.perros_latas,
      perros_sobres : action.perros_sobres,
      
      perros_bolsa22kg  : action.perros_bolsa22kg,
      perros_bolsa15kg  : action.perros_bolsa15kg,
      perros_bolsa10kg  : action.perros_bolsa10kg,
      perros_bolsa8kg : action.perros_bolsa8kg,
      perros_bolsa6kg : action.perros_bolsa6kg,
      perros_bolsa3kg : action.perros_bolsa3kg,
      perros_bolsa2kg : action.perros_bolsa2kg,
      
      perros_lata400gr  : action.perros_lata400gr,
      perros_lata340gr  : action.perros_lata340gr,
      perros_lata290gr  : action.perros_lata290gr,
      
      perros_sobre100gr : action.perros_sobre100gr,
      perros_sobre85gr  : action.perros_sobre85gr,
      
      gatos_bolsas  : action.gatos_bolsas,
      gatos_latas  : action.gatos_latas,
      gatos_sobres  : action.gatos_sobres,
      
      gatos_bolsa1kg  : action.gatos_bolsa1kg,
      gatos_bolsa3kg  : action.gatos_bolsa3kg,
      
      gatos_lata340gr : action.gatos_lata340gr,
      
      gatos_sobre85gr : action.gatos_sobre85gr,
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

    case 'GET_DISTRIBUIDORES':
      return {
        ...state,
        distribuidores : action.payload,
      };

    case 'NEW_PEDIDO': 
      return {
        ...state,
        pedido : action.payload,
      }


    default:
      return state;
  }
};

