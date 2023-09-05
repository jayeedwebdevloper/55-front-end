import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router/Router';
import Home from './Components/Home/Home';
import 'animate.css';
import Products from './Components/ProductsPage/Products';
import About from './Components/AboutPage/About';
import Cart from './Components/CartPage/Cart';
import Message from './Components/OrderConfirmMessage/Message';
import Coming from './Components/ComingSoonPage/Coming';
import Register from './Components/Account/Register/Register';
import Login from './Components/Account/Login/Login';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Router></Router>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: async () => {
            return fetch('http://localhost:3000/')
          }
        },
        {
          path: '/products',
          element: <Products></Products>,
          loader: async () => {
            return fetch('http://localhost:3000/')
          }
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/cart/:id',
          element: <PrivateRouter><Cart></Cart></PrivateRouter>,
          loader: async ({ params }) => {
            return fetch(`http://localhost:3000/products/${params.id}`)
          }
        },
        {
          path: '/cart',
          element: <PrivateRouter><Cart></Cart></PrivateRouter>,
          loader: async () => {
            return fetch(`http://localhost:3000/`)
          }
        },
        {
          path: '/account',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/complete/:id',
          element: <Message></Message>,
          loader: async ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
        },
        {
          path: '*',
          element: <Coming></Coming>
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>

    </>
  )


}

export default App
