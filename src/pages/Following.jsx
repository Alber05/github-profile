import { useOutletContext } from 'react-router-dom'
import Loader from '../components/Loader'
import FollowerCard from '../components/FollowerCard'

function Following() {
    const { userFollowing, isLoading } = useOutletContext()

    if (isLoading) return <Loader />

    return (
        <main className='mx-auto mt-6 grid  max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8'>
            {userFollowing?.map((userFollower) => (
                <FollowerCard
                    key={userFollower.id}
                    userFollower={userFollower}
                />
            ))}
        </main>
    )
}

export default Following
