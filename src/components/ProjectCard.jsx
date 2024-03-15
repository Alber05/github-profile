import PropTypes from 'prop-types'
import { getLastUpdated } from '../helpers/getLastUptdate'
import StartIcon from '../assets/Star.svg'
import NestingIcon from '../assets/Nesting.svg'
import ChieldIcon from '../assets/Chield_alt.svg'

function ProjectCard({ repositorie }) {
    return (
        <article className='flex flex-col justify-between gap-4 rounded-lg bg-custom-1D1B48 bg-gradient-to-r from-custom-111729 px-6 py-4 shadow-xl'>
            <header>
                <h2 className='font text-lg font-semibold text-custom-CDD5E0 '>
                    <a
                        href={repositorie.html_url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='transition-colors duration-200 hover:text-custom-3662E3'
                    >
                        {repositorie.name}
                    </a>
                </h2>
            </header>
            <section>
                <p className='text-sm font-semibold text-custom-CDD5E0'>
                    {repositorie.description}
                </p>
            </section>
            <footer>
                <ul className='flex gap-2'>
                    {repositorie.license && (
                        <li className='flex items-center gap-1 text-custom-CDD5E0'>
                            <img src={ChieldIcon} alt='' />{' '}
                            {repositorie.license.name.split(' ')[0]}
                        </li>
                    )}

                    <li className='flex items-center gap-1 text-custom-CDD5E0'>
                        <img src={NestingIcon} alt='' />
                        {repositorie.forks}
                    </li>
                    <li className='flex items-center gap-1 text-custom-CDD5E0'>
                        <img src={StartIcon} alt='' />
                        {repositorie.stargazers_count}
                    </li>
                    <li className='ml-4 flex items-center gap-1 text-xs text-custom-CDD5E0'>
                        actualizado hace{' '}
                        {getLastUpdated(repositorie.updated_at)} días
                    </li>
                </ul>
            </footer>
        </article>
    )
}

ProjectCard.propTypes = {
    repositorie: PropTypes.object.isRequired
}

export default ProjectCard
