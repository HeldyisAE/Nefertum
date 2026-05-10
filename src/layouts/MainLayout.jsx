import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  return (
    <div className="app-layout">
      <div className="top">
        <Header />
      </div>

      <div className="mid">
        <Outlet />
      </div>

      <div className="below">
        <Footer/>
      </div>
    </div>
  );
}

export default MainLayout;