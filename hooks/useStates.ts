import { useSelector } from "react-redux";

export const useStates = () => {

    const stock = useSelector((state : any) => state.stock)
    const animales = useSelector((state : any) => state.animales)
    const bolsas = useSelector((state : any) => state.bolsas)
    const latas = useSelector((state : any) => state.latas)
    const bolsa8kg = useSelector((state : any) => state.bolsa8kg)
    const bolsa15kg = useSelector((state : any) => state.bolsa15kg)
    const bolsa10kg = useSelector((state : any) => state.bolsa10kg)

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
        stock,
        animales,
        bolsas,
        latas,
        bolsa8kg,
        bolsa15kg,
        bolsa10kg,
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
    } 
}
