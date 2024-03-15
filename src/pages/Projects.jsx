import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import PropTypes from 'prop-types'
import ProjectCard from '../components/ProjectCard'
import Loader from '../components/Loader'

function Projects() {
    const { userRepositories, projectsLoader } = useOutletContext()
    const [visibleRepositories, setVisibleRepositories] = useState(10)

    const showMoreRepositories = () => {
        setVisibleRepositories(
            (prevVisibleRepositories) => prevVisibleRepositories + 10
        )
    }

    if (projectsLoader) return <Loader />

    return (
        <main className='mx-auto mt-6 grid max-w-[1280px] gap-8 lg:grid-cols-2'>
            {userRepositories
                ?.slice(0, visibleRepositories)
                ?.map((repositorie) => (
                    <ProjectCard
                        key={repositorie.id}
                        repositorie={repositorie}
                    />
                ))}

            {visibleRepositories < userRepositories?.length && (
                <button
                    onClick={showMoreRepositories}
                    className='col-span-2 text-custom-CDD5E0'
                >
                    Ver más
                </button>
            )}
        </main>
    )
}

Projects.propTypes = {
    userRepositories: PropTypes.array
}

export default Projects
