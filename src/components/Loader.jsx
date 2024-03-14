import { RevolvingDot } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='mx-auto mt-6 flex min-h-[40vh] max-w-[1280px] flex-col items-center justify-center gap-2'>
            <RevolvingDot
                height='80'
                width='80'
                color='#CDD5E0'
                ariaLabel='revolving-dot-loading'
                wrapperStyle={{}}
                wrapperClass=''
            />
            <p className='font-bold text-custom-CDD5E0'>Cargando...</p>
        </div>
    )
}

export default Loader
