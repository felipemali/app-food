import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataOrders from "./components/salesData/DataOrders";
import "./index.css";
import Home from "./pages/Home";
import WishProvider from "./provider/wishList";
import reportWebVitals from "./reportWebVitals";
import { routes } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <WishProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.dataOrder.path} element={<DataOrders />} />
          <Route path={routes.home.path} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </WishProvider>
  </React.StrictMode>
);
reportWebVitals();
