import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import Browser from './components/Browser'

function App() {
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const { pathname } = location
        // Verificar si la URL tiene un usuario definido
        const username = pathname.split('/')[1]
        if (!username) {
            // Si no hay un nombre de usuario en la URL, redirigir a /github
            navigate('/github')
        }
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
