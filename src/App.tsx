import React from 'react'
import BikeProvider from './providers/BikeAPiProvider'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './assets/styles/index.css'
import {QueryClientProvider, QueryClient } from '@tanstack/react-query';

type Props = {
  children: React.ReactNode,
}
function App(props: Props) {
  return (
    <>
      <QueryClientProvider client={ new QueryClient()}>
        <BikeProvider>
          {props.children}
          <div className='px-20 mt-10'>
            <Header />
            <div className='mt-10'>
              <Outlet  />
            </div>
          </div>
          
        </BikeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App;
