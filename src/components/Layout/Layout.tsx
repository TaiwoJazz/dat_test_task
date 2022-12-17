
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';

const Layout = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
