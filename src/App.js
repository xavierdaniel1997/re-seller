import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AddItem from "./pages/AddItem";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

function App() {

  const AppLayout = () => {
    return(
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/addItem", 
          element: <AddItem/>
        },
        {
          path: "/product/:id",
          element: <ProductPage/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])
  
  return (
      <>
        <RouterProvider router={appRoutes}/>
      </>
  );
}

export default App;
