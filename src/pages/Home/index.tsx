import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/Header";
import OrderTab from "../../components/OrderTab";
import WishProvider from "../../provider/wishList";
import { routes } from "../../routes";

const Home = () => {
  return (
    <WishProvider>
      {/* <Routes>
          <Route path={routes.home.path} element={<Header />} />
          <Route path={routes.home.path} element={<OrderTab />} />
        </Routes> */}
      <Header />
      <OrderTab />
    </WishProvider>
  );
};
export default Home;
