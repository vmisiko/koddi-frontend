import React from 'react'
import BikeProvider from './providers/BikeAPiProvider'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './assets/styles/index.css'

type Props = {
  children: React.ReactNode,
}
function App(props: Props) {
  return (
    <>
      <BikeProvider>
        {props.children}
        <div className='px-20 mt-10'>
          <Header />
          <div className='mt-10'>
            <Outlet  />
          </div>
        </div>
        
      </BikeProvider>
    </>
  )
}

export default App;
