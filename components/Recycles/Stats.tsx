import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default function Stats({cantidad,monto,title, objetivo} : any) {
  
    
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

    React.useEffect(() => {
        if (title === "Ventas diarias" && monto >= 10000) {
            alert('Cumpliste el objetivo de ventas diarias')
        } else if (title === "Ventas mensuales" && monto >= 200000) {
            alert('Cumpliste el objetivo de ventas mensuales')
        } else if (title === "Ventas anuales" && monto >= 2600000) {
            alert('Cumpliste el objetivo de ventas anuales')
        }
    }, [])

  
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
            <Text style={styles.text1}>{title}</Text>
            <Text style={styles.text2}>$ {monto}</Text>
            <Text style={styles.text1}>Vendiste {cantidad} items</Text>
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