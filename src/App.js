import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routing/AdminRoute";
import ProductsPage from "./screens/products/ProductsPage";
import NewProduct from "./screens/addProduct/NewProduct";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Layout/DashboardLayout";
import Login from "./Components/Login/Login";
import Users from "./screens/users/Users";

function App() {
  const auth = localStorage.getItem("user");
  console.log(auth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        {auth && (
          <Route path="Dashboard/" element={<DashboardLayout />}>
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/add-product" element={<NewProduct />} />
            <Route path="users" element={<Users />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
