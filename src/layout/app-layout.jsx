import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div className="relative min-h-screen">
            <div className='grid-background'></div>
            <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <Header/>
                <Outlet />
            </main>
            <div className='p-4 text-center bg-gray-800 mt-10'>Made by Pranjal Prasoon</div>
        </div>
    )
}

export default AppLayout
