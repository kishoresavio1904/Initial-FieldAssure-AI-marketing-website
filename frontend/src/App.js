import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import UseCases from "@/pages/UseCases";
import Pricing from "@/pages/Pricing";
import RequestDemo from "@/pages/RequestDemo";
import AboutContact from "@/pages/AboutContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/about" element={<AboutContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
