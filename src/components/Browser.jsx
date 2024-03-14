import { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import SearchIcon from '../assets/Search.svg'

function Browser() {
    const [query, setQuery] = useState('')
    const [searchedUser, setSearchedUser] = useState(null)

    const { user } = useParams()

    const inputRef = useRef(null) // Referencia al input
    const linkContainerRef = useRef(null) // Referencia para el contenedor del enlace

    useEffect(() => {
        setQuery('')
        setSearchedUser(null)
    }, [user])

    useEffect(() => {
        // Función para manejar clic fuera del input
        const handleClickOutside = (event) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target) &&
                linkContainerRef.current &&
                !linkContainerRef.current.contains(event.target)
            ) {
                setQuery('')
            }
        }

        // Agrega el listener cuando el componente se monta
        document.addEventListener('mousedown', handleClickOutside)

        // Limpieza del listener cuando el componente se desmonte
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (query) {
                getUserSearch()
            }
        }, 700) // Espera 500ms después de que el usuario deje de escribir para hacer la búsqueda

        return () => clearTimeout(timerId) // Limpia el timeout si el componente se desmonta o si el usuario sigue escribiendo
    }, [query]) // Este efecto se ejecuta cada vez que 'query' cambia

    const handleQuery = (e) => {
        setQuery(e.target.value)
        if (e.target.value === '') {
            setSearchedUser(null)
        }
    }

    const getUserSearch = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/search/users?q=${query}`
            )
            const {
                items: [first]
            } = await response.json()
            setSearchedUser(first)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className='relative z-30 mx-auto flex w-full max-w-xl items-center rounded-xl bg-custom-20293A px-4 shadow-md'>
            <input
                ref={inputRef}
                type='text'
                className='h-[50px] w-full bg-custom-20293A py-4 text-custom-CDD5E0 outline-none placeholder:font-semibold placeholder:text-custom-4A5567'
                placeholder='username'
                value={query}
                onChange={(e) => handleQuery(e)}
            />
            <img
                src={SearchIcon}
                alt=''
                className='h-full text-custom-4A5567'
            />
            {searchedUser && query && (
                <div
                    className='absolute left-0 top-[60px] z-30 w-full max-w-xl rounded-xl bg-custom-20293A p-4'
                    ref={linkContainerRef}
                >
                    <Link
                        to={`/${searchedUser.login}`}
                        className='flex items-center gap-4'
                    >
                        <img
                            src={searchedUser.avatar_url}
                            alt={`${searchedUser.login} avatar image`}
                            className='h-[50px] w-[50px]'
                        />
                        <div className='flex flex-col'>
                            <h3 className='text-custom-CDD5E0'>
                                {searchedUser.login}
                            </h3>
                            <p>{searchedUser.bio}</p>
                        </div>
                    </Link>
                </div>
            )}
        </form>
    )
}

Browser.propTypes = {}

export default Browser
