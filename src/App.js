import { useContext, useState } from "react";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AuthContextProvider from "./context/AuthContextProvider";
import AddItem from "./pages/AddItem";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./context/ProtectedRoute";
import ProductContextProvider from "./context/ProductContextProvider";
import UserContextProvider from "./context/UserContext";
import SearchContextProvider from "./context/SearchContext";
// import logContext from "./context/logContext";

function App() {
  // const [isLogin,setLogin]=useState(true)
  const AppLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/addItem",
          element: (
            <ProtectedRoute>
              <AddItem />
            </ProtectedRoute>
          ),
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <AuthContextProvider>
        <UserContextProvider>
          <ProductContextProvider>
            <SearchContextProvider>
              <RouterProvider router={appRoutes} />
            </SearchContextProvider>
          </ProductContextProvider>
        </UserContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
