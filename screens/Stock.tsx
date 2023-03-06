import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useHistory } from 'react-router-native'
import StockC from '../components/Stock'
import SideBar from '../components/Recycles/SideBar'


export default function Stock() {

  return (
    <SideBar title={"Stock disponible"} route={'/ChangeStock'} icon="true">
      <StockC />
    </SideBar>
  )
}