import React from 'react'
import DashboardC from '../components/DashboardC'
import SideBar from '../components/Recycles/SideBar'

export default function Dashboard() {
  return <SideBar title={"Hi, Dario"} route={'Stock'} icon="true"><DashboardC /></SideBar>
}