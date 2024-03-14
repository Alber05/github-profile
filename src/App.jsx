import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Browser from './components/Browser'

function App() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/github')
    }, [])

    return (
        <div className='relative min-h-screen bg-custom-20293A py-[72px]'>
            <div className='absolute left-0 top-0 z-10 h-64 w-full bg-hero bg-cover bg-center'></div>
            <header className='relative z-20 mx-auto w-[90%] max-w-[1280px] '>
                <Browser />
            </header>
            <Outlet />
        </div>
    )
}

export default App
