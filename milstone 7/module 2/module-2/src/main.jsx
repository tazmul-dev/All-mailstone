import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './root/Root.jsx';
import Home from './component/home/Home.jsx';
import Contact from './component/contact/Contact.jsx';
import Product from './component/product/Product.jsx';

const router = createBrowserRouter([
{
  path:"/",
 Component: Root,
 children:[
  {index: true, Component: Home},
  {path: "contact", Component: Contact},
  {path: "product", Component: Product}
 ]
}
,
{
  path: 'about',
  element: <h1>this is a about section</h1>
}
// nested component


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
