import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import UserMenuButton from './UserMenuButton'

function UserMenu({ userInfo }) {
    const { user } = useParams()

    return (
        <div className='mt-24 sm:flex sm:gap-4'>
            <div className='h-[100px] w-[100px] min-w-[100px] rounded-xl border-8 border-custom-20293A bg-black'>
                <a
                    href={`https://github.com/${user}`}
                    target='_blank'
                    rel='noreferrer'
                >
                    <img
                        src={userInfo.avatar_url}
                        alt={`${user} avatar image`}
                    />
                </a>
            </div>
            <div className='flex flex-col items-start gap-2 sm:mt-11 sm:flex-row sm:flex-wrap'>
                <UserMenuButton
                    userInfo={userInfo.public_repos}
                    link={`/${user}`}
                    menu='Repositorios'
                />
                <UserMenuButton
                    userInfo={userInfo.followers}
                    link={`/${user}/followers`}
                    menu='Seguidores'
                />
                <UserMenuButton
                    userInfo={userInfo.following}
                    link={`/${user}/following`}
                    menu='Seguidos'
                />
                <UserMenuButton userInfo={userInfo.location} menu='Ubicación' />
            </div>
        </div>
    )
}

UserMenu.propTypes = {
    userInfo: PropTypes.object.isRequired
}

export default UserMenu
