import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import User from './pages/User.jsx'
import Projects from './pages/Projects.jsx'
import Followers from './pages/Followers.jsx'
import Following from './pages/Following.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/:user',
                element: <User />,
                children: [
                    {
                        index: true,
                        element: <Projects />
                    },
                    {
                        path: 'followers',
                        element: <Followers />
                    },
                    {
                        path: 'following',
                        element: <Following />
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
