import React from 'react'
import AddVenta from '../components/AddVenta'
import SideBar from '../components/Recycles/SideBar'

export default function Ventas() {
  return <SideBar title={"Nueva venta"}><AddVenta /></SideBar>
}