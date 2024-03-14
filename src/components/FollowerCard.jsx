import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function FollowerCard({ userFollower }) {
    return (
        <article
            key={userFollower.id}
            className='rounded-lg bg-custom-111729 px-6 py-4 shadow-md'
        >
            <Link
                to={`/${userFollower.login}`}
                className='flex h-full flex-col items-center justify-center'
            >
                <img
                    src={userFollower.avatar_url}
                    alt={`${userFollower.login} avatar image`}
                    className='h-[50px] w-[50px] rounded-full'
                />

                <h2 className='cursor-pointer text-ellipsis font-semibold text-custom-CDD5E0'>
                    {userFollower.login}
                </h2>
                <p>{userFollower.bio}</p>
            </Link>
        </article>
    )
}

FollowerCard.propTypes = {
    userFollower: PropTypes.object.isRequired
}

export default FollowerCard
