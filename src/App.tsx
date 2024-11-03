import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/notFound";
import { Products } from "./pages/products";
import { Product } from "./pages/product";
import { CreateProduct } from "./pages/createProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/products" />} />
      <Route path="/products" element={<Products />}>
        <Route path=":id" element={<Product />} />
        <Route path="create-product" element={<CreateProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
