import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { Suspense, lazy } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './Header';

const Home = lazy(() => import('./Home'));
const Admin = lazy(() => import('./Modules/Admin/Admin'));
const AdminDashboard = lazy(() => import('./Modules/Admin/AdminDashboard'));
const AdminSetting = lazy(() => import('./Modules/Admin/AdminSetting'));

const User = lazy(() => import('./Modules/User/User'));
const UserProfile = lazy(() => import('./Modules/User/UserProfile'));
const UserSetting = lazy(() => import('./Modules/User/UserSetting'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/setting" element={<AdminSetting />} />
          </Route>
          <Route path="/user" element={<User />}>
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/setting" element={<UserSetting />} />
          </Route>
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
