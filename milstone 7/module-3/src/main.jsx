import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './compnent/root/Root.jsx';
import Home from './compnent/nav-componet/Home.jsx';
import About from './compnent/nav-componet/About.jsx';
import Blog from './compnent/nav-componet/Blog.jsx';
import Users from './compnent/Users/Users.jsx';
import Users2 from './compnent/Users/Users2.jsx';
import UserDetails from './compnent/userDetails/UserDetails.jsx';

const usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
.then( res => res.json())



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path:'home', Component: Home},
      {path: 'about', Component: About},
      {path: 'blog', Component: Blog},
      {path:'users',
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Data load....</span>}>
          <Users2 usersPromise={usersPromise}></Users2>
        </Suspense>
      },
      
      {
        path: 'users/:userId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      }

      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
