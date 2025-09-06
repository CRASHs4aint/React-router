import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Github from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },
      {
        path:"github",
        element:<Github/>
      },{
        path:"contact",
        element:<Contact/>
      },{
        path:"user/:userid",
        element:<User/>
      }
    ]
  }
])
// const router = createBrowserRouter(
//   createRouterFromElemnts(
//     <Route path='/' element={<Layout/>}>
//        <Route path='' element={<Home/>}/>
//        <Route path='about' element={<About/>}/>
//        <Route path='contact' element={<Contact/>}/>
//        <Route path='user/:userid' element={<User/>}/>

//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
