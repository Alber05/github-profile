import { useState, useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import UserMenu from '../components/UserMenu'

function User() {
    const [userInfo, setUserInfo] = useState({})
    const [userRepositories, setUserRepositories] = useState([])
    const [userFollowers, setUserFollowers] = useState([])
    const [userFollowing, setUserFollowing] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [projectsLoader, setProjectsLoader] = useState(false)
    const [followersLoader, setFollowersLoader] = useState(false)
    const [followingLoader, setFollowingLoader] = useState(false)

    const { user } = useParams()

    useEffect(() => {
        const getAllData = async () => {
            await Promise.all([
                getUserInfo(user),
                getUserRepositories(user),
                getUserFollowers(user),
                getUserFollowing(user)
            ])
        }

        getAllData()
    }, [user])

    const token = import.meta.env.VITE_API_TOKEN

    const getUserInfo = async (username) => {
        setIsLoading(true)
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`,
                {
                    headers: {
                        Authorization: `token ${token}`
                    }
                }
            )
            const data = await response.json()
            setUserInfo(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    const getUserRepositories = async (username) => {
        setProjectsLoader(true)
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}/repos?sort=created&direction=desc&page=1&per_page=100`,
                {
                    headers: {
                        Authorization: `token ${token}`
                    }
                }
            )
            const data = await response.json()
            setUserRepositories(data)
        } catch (error) {
            console.log(error)
        } finally {
            setProjectsLoader(false)
        }
    }

    const getUserFollowers = async (username) => {
        setFollowersLoader(true)
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}/followers?page=1&per_page=30`,
                {
                    headers: {
                        Authorization: `token ${token}`
                    }
                }
            )
            const data = await response.json()
            setUserFollowers(data)
        } catch (error) {
            console.log(error)
        } finally {
            setFollowersLoader(false)
        }
    }

    const getUserFollowing = async (username) => {
        setFollowingLoader(true)
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}/following`,
                {
                    headers: {
                        Authorization: `token ${token}`
                    }
                }
            )
            const data = await response.json()
            setUserFollowing(data)
        } catch (error) {
            console.log(error)
        } finally {
            setFollowingLoader(false)
        }
    }

    return (
        <div className='relative z-10 mx-auto w-[90%] max-w-[1280px]'>
            <UserMenu userInfo={userInfo} />
            <div className='mt-6'>
                <h1 className='text-2xl font-bold text-custom-CDD5E0'>
                    {userInfo.login}
                </h1>
                <p className='font-semibold text-custom-4A5567'>
                    {userInfo.bio}
                </p>
            </div>
            <Outlet
                context={{
                    userRepositories,
                    userFollowers,
                    isLoading,
                    userFollowing,
                    projectsLoader,
                    followersLoader,
                    followingLoader
                }}
            />
        </div>
    )
}

export default User
