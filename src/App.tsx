import React from 'react'
import './App.css'
import BikeProvider from './providers/BikeAPiProvider'
import { Outlet } from 'react-router-dom'

type Props = {
  children: React.ReactNode,
}
function App(props: Props) {
  return (
    <>
      <BikeProvider>
        {props.children}
        <Outlet></Outlet>
      </BikeProvider>
    </>
  )
}

export default App;
