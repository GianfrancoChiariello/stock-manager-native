import { useSelector } from "react-redux";

export const useStates = () => {

    const stock = useSelector((state : any) => state.stock)
    const animales = useSelector((state : any) => state.animales)

    const perros_empaques = useSelector((state : any) => state.perros_empaques)
    const gatos_empaques = useSelector((state : any) => state.gatos_empaques)


    const perros_bolsas = useSelector((state : any) => state.perros_bolsas)
    const perros_latas = useSelector((state : any) => state.perros_latas)
    const perros_sobres = useSelector((state : any) => state.perros_sobres)

    const perros_bolsa22kg = useSelector((state : any) => state.perros_bolsa22kg)
    const perros_bolsa15kg = useSelector((state : any) => state.perros_bolsa15kg)
    const perros_bolsa10kg = useSelector((state : any) => state.perros_bolsa10kg)
    const perros_bolsa8kg = useSelector((state : any) => state.perros_bolsa8kg)
    const perros_bolsa6kg = useSelector((state : any) => state.perros_bolsa6kg)
    const perros_bolsa3kg = useSelector((state : any) => state.perros_bolsa3kg)
    const perros_bolsa2kg = useSelector((state : any) => state.perros_bolsa2kg)

    const perros_lata400gr = useSelector((state : any) => state.perros_lata400gr)
    const perros_lata340gr = useSelector((state : any) => state.perros_lata340gr)
    const perros_lata290gr = useSelector((state : any) => state.perros_lata290gr)

    const perros_sobre100gr = useSelector((state : any) => state.perros_sobre100gr)
    const perros_sobre85gr = useSelector((state : any) => state.perros_sobre85gr)

    const gatos_bolsas = useSelector((state : any) => state.gatos_bolsas)
    const gatos_latas = useSelector((state : any) => state.gatos_latas)
    const gatos_sobres = useSelector((state : any) => state.gatos_sobres)

    const gatos_bolsa1kg = useSelector((state : any) => state.gatos_bolsa1kg)
    const gatos_bolsa3kg = useSelector((state : any) => state.gatos_bolsa3kg)

    const gatos_lata340gr = useSelector((state : any) => state.gatos_lata340gr)

    const gatos_sobre85gr = useSelector((state : any) => state.gatos_sobre85gr)


    
    
    
    
    const totalVentasHoy = useSelector((state : any) => state.totalVentasHoy)
    const totalVentasMes = useSelector((state : any) => state.totalVentasMes)
    const totalVentasAno = useSelector((state : any) => state.totalVentasAno)

    const totalVentasHoyMonto = useSelector((state : any) => state.totalVentasHoyMonto)
    const totalVentasMesMonto = useSelector((state : any) => state.totalVentasMesMonto)
    const totalVentasAnoMonto = useSelector((state : any) => state.totalVentasAnoMonto)

    const totalVentasMp = useSelector((state : any) => state.totalVentasMp)
    const totalVentasEfectivo = useSelector((state : any) => state.totalVentasEfectivo)
    const totalVentasDebito = useSelector((state : any) => state.totalVentasDebito)
    const totalVentasCredito = useSelector((state : any) => state.totalVentasCredito)
    const totalVentasEnvio = useSelector((state : any) => state.totalVentasEnvio)


    return {
        totalVentasHoy,
        totalVentasMes,
        totalVentasAno,
        totalVentasHoyMonto,
        totalVentasMesMonto,
        totalVentasAnoMonto,
        totalVentasMp,
        totalVentasEfectivo,
        totalVentasDebito,
        totalVentasCredito,
        totalVentasEnvio,
        perros_empaques,
        gatos_empaques,

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
        
    } 
}
