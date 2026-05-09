import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

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
        <h2> Info dev </h2>
      </div>
    </div>
  );
}

export default MainLayout;