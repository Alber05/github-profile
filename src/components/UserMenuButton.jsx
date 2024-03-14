import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserMenuButton({ userInfo, link, menu }) {
    return (
        <div className='userInfo-card relative col-span-4 flex h-12 justify-center overflow-hidden rounded-xl bg-custom-111729 py-3 text-xs shadow-lg'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Link
                to={link}
                className='flex h-full items-center border-r border-r-custom-4A5567 px-4 font-semibold text-custom-4A5567'
            >
                {menu}
            </Link>

            <p className='flex h-full items-center px-4 font-semibold text-custom-CDD5E0'>
                {userInfo}
            </p>
        </div>
    )
}

UserMenuButton.propTypes = {
    userInfo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    link: PropTypes.string,
    menu: PropTypes.string.isRequired
}

export default UserMenuButton
