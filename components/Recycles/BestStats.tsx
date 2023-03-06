import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
    ProgressChart,
  } from "react-native-chart-kit";
import {useStates} from '../../hooks/useStates'

export default function Stats({objetivo} : any) {
    
    const {
        totalVentasMp,
        totalVentasEfectivo,
        totalVentasDebito,
        totalVentasCredito,
        totalVentasEnvio,
    } = useStates()
    
    const styles = StyleSheet.create({
        text1: {
            color: '#F3F3F3',
            fontSize: 14,
            fontWeight: '500',
            letterSpacing: 0.3,
        },
        text2: {
            color: '#F3F3F3',
            fontSize: 24,
            fontWeight: '500',
            letterSpacing: 0.3,
        }
    })

    let bester = ''
    let cantidad = 0
    let monto = 0

    if (totalVentasMp > totalVentasEfectivo && totalVentasMp > totalVentasDebito && totalVentasMp > totalVentasCredito && totalVentasMp > totalVentasEnvio) {
        bester = 'Mercado Pago'
        cantidad = totalVentasMp
        monto = totalVentasMp
    } else if (totalVentasEfectivo > totalVentasMp && totalVentasEfectivo > totalVentasDebito && totalVentasEfectivo > totalVentasCredito && totalVentasEfectivo > totalVentasEnvio) {
        bester = 'Efectivo'
        cantidad = totalVentasEfectivo
        monto = totalVentasEfectivo
    } else if (totalVentasDebito > totalVentasMp && totalVentasDebito > totalVentasEfectivo && totalVentasDebito > totalVentasCredito && totalVentasDebito > totalVentasEnvio) {
        bester = 'Debito'
        cantidad = totalVentasDebito
        monto = totalVentasDebito
    } else if (totalVentasCredito > totalVentasMp && totalVentasCredito > totalVentasEfectivo && totalVentasCredito > totalVentasDebito && totalVentasCredito > totalVentasEnvio) {
        bester = 'Credito'
        cantidad = totalVentasCredito
        monto = totalVentasCredito
    } else if (totalVentasEnvio > totalVentasMp && totalVentasEnvio > totalVentasEfectivo && totalVentasEnvio > totalVentasDebito && totalVentasEnvio > totalVentasCredito) {
        bester = 'Envio de dinero'
        cantidad = totalVentasEnvio
        monto = totalVentasEnvio
    } else {
        bester = 'No hay ventas'
    }

  
    const data = {
        data: [monto / objetivo]
    }



  
  
    return (
    <View style={{
        height: 100,
        backgroundColor: 'rgba(46, 46, 50, 1)',
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    }}>
      
        <View>
            <Text style={styles.text1}>Best medio de pago</Text>
            <Text style={styles.text2}>{cantidad} Ventas</Text>
            <Text style={styles.text1}>{bester}</Text>
        </View>

        <View>
        <ProgressChart
            data={data}
            width={100}
            height={125}
            strokeWidth={15}
            chartConfig={{
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => `rgba(71, 91, 230, ${opacity})`,
                barPercentage: 2,
            }}
            radius={30}
            hideLegend={true}
            />
        </View>

    </View>
  )
}