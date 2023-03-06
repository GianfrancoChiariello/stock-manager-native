import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import Stats from './Recycles/Stats'
import {useStates} from '../hooks/useStates'
import {useEffect} from 'react'
import {totalVentas,getStockComida} from '../src/redux/action'
import { useDispatch } from 'react-redux'
import BestStats from './Recycles/BestStats'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(43, 43, 43, 1)',
        width: '100%',
        height: '100%',
        paddingTop: 45,
    },
    title: {
        color: 'rgba(192, 192, 192, 0.81)',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    }
})





export default function DashboardC() {

  
    const dispatch = useDispatch()

    useEffect(() => {
        getStockComida().then((res : any) => {
          dispatch<any>(res)
        })

        if (totalVentasAnoMonto > 600000) {
            alert('Ten cuidado, estas superando el monto de facturacion anual')
        }
      }, [])
    
    const {
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
    } = useStates()
    
    useEffect(() => {
        totalVentas().then((res) => {
            dispatch<any>(res)
        }
        )

    }, [])


    return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
    
    
        
        <ScrollView style={{
            width: '100%',
        }}>
            <Stats cantidad={totalVentasHoy} monto={totalVentasHoyMonto} objetivo={10000}  title="Ventas diarias" />
            <Stats cantidad={totalVentasMes} monto={totalVentasMesMonto} objetivo={200000} title="Ventas mensuales" />
            <Stats cantidad={totalVentasAno} monto={totalVentasAnoMonto} objetivo={2600000} title="Ventas anuales" />
            <BestStats cantidad={totalVentasMp} monto={totalVentasMp} objetivo={500}/>
        </ScrollView>
    
    
    
    
    
    
    
    
    
    
    </View>
  )
}