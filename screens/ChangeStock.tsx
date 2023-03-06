import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useHistory } from 'react-router-native'
import AgregarStock from '../components/AgregarStock'
import SideBar from '../components/Recycles/SideBar'


export default function ChangeStock() {
    const history = useHistory()

  return (
    <SideBar title={"Agregar Stock"}>
      <AgregarStock />
    </SideBar>
  )
}