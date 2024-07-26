import { Outlet, useRouteError } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import NotFound from "../pages/NotFound/NotFound";
import ScrollToTop from "../utility/ScrollToTop";

const Layout = () => {
  const error = useRouteError();

  return (
    <div className={styles.layout}>
      <ScrollToTop />
      <Header />
      <main className={styles.content}>
        {error ? <NotFound /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
