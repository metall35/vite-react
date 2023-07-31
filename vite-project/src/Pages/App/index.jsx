import { useContext } from "react";
import { useRoutes, BrowserRouter  } from "react-router-dom";
import { ShopContextProvider, ShopContext } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import Layout from "../../Components/Layout";
import Modal from "../../Components/Modal";
import  ProductDetail  from "../../Components/ProductDetail";

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/My-account', element: <MyAccount /> },
    { path: '/My-Order', element: <MyOrder /> },
    { path: '/My-Orders', element: <MyOrders /> },
    { path: '/Sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}
function App() {
  const {openModal} = useContext(ShopContext)
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
        {openModal && (
          <Modal>
            <ProductDetail />
          </Modal>
        )}
    </ShopContextProvider>
  )
}

export default App
